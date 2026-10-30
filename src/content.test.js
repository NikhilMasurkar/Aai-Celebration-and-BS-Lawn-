import * as content from './content'
import { contact, packages, ruleHighlights, rules, venues } from './content'

// Anything with an mr or en key is a text pair — so a forgotten or misspelt key is caught, not skipped.
const isText = (v) => v && typeof v === 'object' && !Array.isArray(v) && ('mr' in v || 'en' in v)

function collect(value, match, out = []) {
  if (match(value)) out.push(value)
  else if (value && typeof value === 'object') Object.values(value).forEach((v) => collect(v, match, out))
  return out
}

it('has the three packages with poster prices in order', () => {
  expect(packages.map((p) => p.price)).toEqual([25000, 41000, 51000])
  expect(packages.map((p) => p.venue)).toEqual(['bs-lawn', 'aai-lawn', 'palace'])
})

it('has the palace and both lawns as venues', () => {
  expect(venues.map((v) => v.name.en)).toEqual(['Aai Celebration Palace', 'Aai Lawn', 'BS Lawn'])
  expect(venues.map((v) => v.type)).toEqual(['hall', 'lawn', 'lawn'])
  for (const p of packages) expect(venues.map((v) => v.id)).toContain(p.venue)
})

it('lists every included and extra item from the posters', () => {
  expect(packages.map((p) => p.included.length)).toEqual([8, 9, 9])
  expect(packages.map((p) => p.extras.length)).toEqual([4, 5, 9])
})

it('charges sweeper and speaker separately in the hall package', () => {
  const hallExtras = packages[2].extras.map((e) => e.mr)
  expect(hallExtras).toContain('स्वीपर')
  expect(hallExtras).toContain('स्पीकर')
})

it('has all 13 booking rules', () => {
  expect(rules).toHaveLength(13)
})

it('uses the WhatsApp and call numbers from the posters', () => {
  expect(contact.whatsapp).toBe('919284325413')
  expect(contact.phones).toEqual(['7507504947', '9284325413'])
})

it('never leaves a string blank in either language', () => {
  const texts = collect(content, isText)
  expect(texts.length).toBeGreaterThan(50)
  for (const t of texts) {
    expect(Object.keys(t).sort(), JSON.stringify(t)).toEqual(['en', 'mr'])
    expect(t.mr.trim(), JSON.stringify(t)).not.toBe('')
    expect(t.en.trim(), JSON.stringify(t)).not.toBe('')
  }
})

it('puts the no-refund rule among the up-front highlights', () => {
  expect(ruleHighlights).toHaveLength(5)
  expect(ruleHighlights.some((h) => /refund/i.test(h.en))).toBe(true)
})

it('gives every image a source and bilingual alt text', () => {
  const images = collect(content, (v) => v && typeof v === 'object' && 'src' in v)
  expect(images.length).toBeGreaterThan(10)
  for (const img of images) {
    expect(img.src).toMatch(/^(https:\/\/|\/)/)
    expect(isText(img.alt)).toBe(true)
    // phones must not download the 1600px desktop photo
    expect(img.srcSet).toMatch(/ 640w, .+ 960w, .+ 1600w$/)
  }
  for (const v of venues) expect(v.photos.length, v.id).toBeGreaterThanOrEqual(4)
})

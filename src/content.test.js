import * as content from './content'
import { contact, gallery, packages, rules } from './content'

const isText = (v) =>
  v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v).sort().join() === 'en,mr'

function collect(value, match, out = []) {
  if (match(value)) out.push(value)
  else if (value && typeof value === 'object') Object.values(value).forEach((v) => collect(v, match, out))
  return out
}

it('has the three packages with poster prices in order', () => {
  expect(packages.map((p) => p.price)).toEqual([25000, 41000, 51000])
  expect(packages.map((p) => p.venue)).toEqual(['lawn', 'lawn', 'hall'])
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
    expect(t.mr.trim(), JSON.stringify(t)).not.toBe('')
    expect(t.en.trim(), JSON.stringify(t)).not.toBe('')
  }
})

it('gives every image a source and bilingual alt text', () => {
  const images = collect(content, (v) => v && typeof v === 'object' && 'src' in v)
  expect(images.length).toBeGreaterThan(10)
  for (const img of images) {
    expect(img.src).toMatch(/^(https:\/\/|\/)/)
    expect(isText(img.alt)).toBe(true)
  }
  expect(gallery.hall.length).toBeGreaterThanOrEqual(4)
  expect(gallery.lawn.length).toBeGreaterThanOrEqual(4)
})

import { formatINR, telUrl, whatsappUrl } from './utils'

it('formats rupees with Indian digit grouping', () => {
  expect(formatINR(25000)).toBe('₹25,000')
  expect(formatINR(100000)).toBe('₹1,00,000')
})

it('builds a wa.me link with the message fully URL-encoded', () => {
  const msg = 'नमस्कार & ₹41,000 पॅकेज'
  const url = whatsappUrl('919284325413', msg)
  expect(url).toBe('https://wa.me/919284325413?text=' + encodeURIComponent(msg))
  expect(url.split('?text=')[1]).not.toMatch(/[ ₹&]/)
})

it('builds an Indian tel: link', () => {
  expect(telUrl('7507504947')).toBe('tel:+917507504947')
})

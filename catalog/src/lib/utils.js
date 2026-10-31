const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

export const formatINR = (amount) => inr.format(amount)

export const whatsappUrl = (number, message) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`

export const telUrl = (phone) => `tel:+91${phone}`

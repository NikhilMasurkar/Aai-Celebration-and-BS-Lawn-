// All copy, prices, rules and images for the catalog, in Marathi (mr) and English (en).
// To change a price or an item, edit it here — nothing else needs to change.
// Marathi text is copied verbatim from the package posters in content/.

const unsplash = (id, width) => `https://images.unsplash.com/photo-${id}?w=${width}&q=70&auto=format&fit=crop`

const photo = (id, mr, en) => ({
  src: unsplash(id, 1600),
  srcSet: [640, 960, 1600].map((w) => `${unsplash(id, w)} ${w}w`).join(", "),
  alt: { mr, en },
})

export const brand = {
  name: { mr: "आई Celebration & BS Lawn", en: "Aai Celebration & BS Lawn" },
  place: { mr: "हिंगणघाट, वर्धा", en: "Hinganghat, Wardha" },
  tagline: {
    mr: "जेव्हा सगळ्या गोष्टी आम्ही सांभाळणार तर तुम्हाला कशाला चिंता, बुकिंग करा आणि मोकळे व्हा",
    en: "When we take care of everything, why worry? Book with us and relax.",
  },
}

export const contact = {
  phones: ["7507504947", "9284325413"],
  whatsapp: "919284325413",
  address: {
    mr: "नांदगाव रोड, येनोरा रोड, माँ भवानी माता मंदिर जवळ, हिंगणघाट, जिल्हा वर्धा 442301",
    en: "Nandgaon Road, Yenora Road, near Maa Bhavani Mata Mandir, Hinganghat, Dist. Wardha 442301",
  },
  // ponytail: address search link; swap for the exact Google Maps pin when the owner shares it
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Aai Celebration & BS Lawn, Nandgaon Road, Yenora Road, Hinganghat, Wardha 442301"),
}

// Placeholder photos (Unsplash) — replace with real venue photos later.
export const heroImage = photo(
  "1745573673583-a51f665ae48e",
  "फुले आणि पडद्यांनी सजवलेला लग्न स्टेज",
  "Wedding stage decorated with flowers and drapes",
)

// The three venues. Facts come from each venue's package poster; photos are placeholders.
export const venues = [
  {
    id: "palace",
    type: "hall",
    name: { mr: "आई Celebration Palace", en: "Aai Celebration Palace" },
    tab: { mr: "पॅलेस", en: "Palace" },
    image: photo("1708606811579-23b18fc48007", "झुंबरासह सजवलेला हॉल स्टेज", "Decorated hall stage with chandeliers"),
    facts: [
      { mr: "पाहुण्यांसाठी 4 AC रूम व 1 Non AC हॉल", en: "4 AC rooms and 1 non-AC hall for guests" },
      { mr: "संपूर्ण डक्टिंग मॅरेज हॉल / डायनिंग हॉल", en: "Fully ducted marriage hall and dining hall" },
      { mr: "300 चेयर व 20 कुशन सोफा", en: "300 chairs and 20 cushion sofas" },
    ],
    photos: [
      photo("1745573674471-e057af420757", "फुलांनी सजवलेला लग्न स्टेज", "Wedding stage decorated with flowers"),
      photo("1745573674206-1d4805fcc427", "लग्नासाठी सजवलेला स्टेज", "Stage decorated for a wedding"),
      photo("1745573673416-66e829644ae9", "समारंभासाठी तयार स्टेज", "Stage ready for a celebration"),
      photo("1608713709464-04cfb951c93f", "लाल पडद्यांसह स्टेज", "Stage with red curtains"),
      photo("1708606811579-23b18fc48007", "झुंबरासह सजवलेला हॉल स्टेज", "Decorated hall stage with chandeliers"),
    ],
  },
  {
    id: "aai-lawn",
    type: "lawn",
    name: { mr: "आई लॉन", en: "Aai Lawn" },
    tab: { mr: "आई लॉन", en: "Aai Lawn" },
    image: photo("1769230387364-8b0c2b63e18b", "सिरीज लाइटिंगखाली लग्नाचे स्वागत समारंभ", "Wedding reception under string lights"),
    facts: [
      { mr: "लॉन डेकोरेशन, पार लाईट आणि सिरीज लाइटिंग", en: "Lawn decoration, par lights and series lighting" },
      { mr: "200 चेअर आणि 12 नग सोफा", en: "200 chairs and 12 sofas" },
      { mr: "पाहुण्यांसाठी 4 रुम व सेल्फी पॉईंट", en: "4 rooms for guests and a selfie point" },
    ],
    photos: [
      photo("1769230387364-8b0c2b63e18b", "सिरीज लाइटिंगखाली लग्नाचे स्वागत समारंभ", "Wedding reception under string lights"),
      photo("1769230387242-6917578550d6", "रात्री फुलांच्या कमानीखाली वधू-वर", "Couple under a floral arch at night"),
      photo("1587271636175-90d58cdad458", "फुलांच्या मंडपाखाली वधू-वर", "Couple seated under a floral mandap"),
      photo("1751891159950-bf33e1e8705b", "जेवणासाठी सजवलेले गोल टेबल", "Round table set for dinner"),
    ],
  },
  {
    id: "bs-lawn",
    type: "lawn",
    name: { mr: "BS लॉन", en: "BS Lawn" },
    tab: { mr: "BS लॉन", en: "BS Lawn" },
    image: photo("1574482211311-45a2169db57c", "सिरीज लाइटिंगने उजळलेले लॉन", "Lawn lit with string lights"),
    facts: [
      { mr: "लॉन एन्ट्री डेकोरेशन, पार लाईट आणि सिरीज लाइटिंग", en: "Lawn entry decoration, par lights and series lighting" },
      { mr: "150 चेअर आणि 8 नग सोफा", en: "150 chairs and 8 sofas" },
      { mr: "पॅकेजमध्ये इले. बिल समाविष्ट", en: "Electricity bill included in the package" },
    ],
    photos: [
      photo("1574482211311-45a2169db57c", "सिरीज लाइटिंगने उजळलेले लॉन", "Lawn lit with string lights"),
      photo("1764267703628-cb434215ce83", "रात्री सिरीज लाइटिंगखाली पाहुणे", "Guests under string lights at night"),
      photo("1782309088597-535ff360bde3", "कंदिलांनी उजळलेला बागेतील मार्ग", "Garden path lit with lanterns"),
      photo("1790090930508-8ac513c6a1c6", "सिरीज लाइटिंगने उजळलेले अंगण", "Courtyard lit with string lights"),
    ],
  },
]

export const packages = [
  {
    id: "bs-lawn",
    venue: "bs-lawn",
    price: 25000,
    name: { mr: "BS लॉन पॅकेज", en: "BS Lawn Package" },
    included: [
      { mr: "मॅरेज सोफा", en: "Marriage sofa" },
      { mr: "स्टेज डेकोरेशन", en: "Stage decoration" },
      { mr: "लॉन एन्ट्री डेकोरेशन", en: "Lawn entry decoration" },
      { mr: "पार लाईट आणि सिरीज लाइटिंग", en: "Par lights and series lighting" },
      { mr: "150 चेअर आणि 8 नग सोफा (कव्हर सोबत)", en: "150 chairs and 8 sofas (with covers)" },
      { mr: "एन्ट्री आणि स्टेज वरील कारपेट", en: "Carpet on entry and stage" },
      { mr: "इले. बिल", en: "Electricity bill" },
      { mr: "नाव (थर्मोकॉल) / वेलकम बोर्ड", en: "Name (thermocol) / welcome board" },
    ],
    extras: [
      { mr: "सफाई", en: "Cleaning" },
      { mr: "स्वीपर", en: "Sweeper" },
      { mr: "जेनेरेटर", en: "Generator" },
      { mr: "साऊंड", en: "Sound" },
    ],
  },
  {
    id: "wedding-lawn",
    venue: "aai-lawn",
    price: 41000,
    name: { mr: "वेडिंग लॉन पॅकेज", en: "Wedding Lawn Package" },
    included: [
      { mr: "पाहुण्यान करीता 4 रुम", en: "4 rooms for guests" },
      { mr: "मॅरेज सोफा", en: "Marriage sofa" },
      { mr: "स्टेज डेकोरेशन", en: "Stage decoration" },
      { mr: "लॉन डेकोरेशन", en: "Lawn decoration" },
      { mr: "पार लाईट आणि सिरीज लाइटिंग", en: "Par lights and series lighting" },
      { mr: "200 चेअर आणि 12 नग सोफा (कव्हर सोबत)", en: "200 chairs and 12 sofas (with covers)" },
      { mr: "एन्ट्री आणि स्टेज वरील कारपेट", en: "Carpet on entry and stage" },
      { mr: "सेल्फी पॉईंट", en: "Selfie point" },
      { mr: "नाव (थर्मोकॉल) / वेलकम बोर्ड", en: "Name (thermocol) / welcome board" },
    ],
    extras: [
      { mr: "इले. बिल", en: "Electricity bill" },
      { mr: "सफाई करणाऱ्या बाई", en: "Cleaning staff" },
      { mr: "स्वीपर", en: "Sweeper" },
      { mr: "जेनेरेटर", en: "Generator" },
      { mr: "साऊंड", en: "Sound" },
    ],
  },
  {
    id: "wedding-hall",
    venue: "palace",
    price: 51000,
    name: { mr: "वेडिंग हॉल पॅकेज", en: "Wedding Hall Package" },
    included: [
      { mr: "पाहुण्यान करीता 4 AC रूम व 1 Non AC हॉल", en: "4 AC rooms and 1 non-AC hall for guests" },
      { mr: "मॅरेज सोफा", en: "Marriage sofa" },
      { mr: "स्टेज डेकोरेशन", en: "Stage decoration" },
      { mr: "संपूर्ण डक्टिंग मॅरेज हॉल / डायनिंग हॉल", en: "Fully ducted marriage hall / dining hall" },
      { mr: "300 चेयर कव्हर सोबत", en: "300 chairs with covers" },
      { mr: "20 कुशन सोफा", en: "20 cushion sofas" },
      { mr: "एन्ट्री आणि स्टेज वरील कारपेट", en: "Carpet on entry and stage" },
      { mr: "साऊंड (2 स्पीकर)", en: "Sound (2 speakers)" },
      { mr: "नाव (थर्मोकॉल) / वेलकम बोर्ड", en: "Name (thermocol) / welcome board" },
    ],
    extras: [
      { mr: "सप्तपदी", en: "Saptapadi" },
      { mr: "संगीत स्टेज", en: "Sangeet stage" },
      { mr: "इले. बिल", en: "Electricity bill" },
      { mr: "हॉल सफाई करणाऱ्या बाई", en: "Hall cleaning staff" },
      { mr: "स्वीपर", en: "Sweeper" },
      { mr: "स्पीकर", en: "Speaker" },
      { mr: "जेनेरेटर", en: "Generator" },
      { mr: "हळदी सेटअप", en: "Haldi setup" },
      { mr: "हळदी साऊंड", en: "Haldi sound" },
    ],
  },
]

export const occasions = [
  { mr: "लग्न", en: "Weddings" },
  { mr: "साखरपुडा", en: "Engagements" },
  { mr: "वाढदिवस", en: "Birthdays" },
  { mr: "सर्व समारंभ", en: "All Celebrations" },
]

export const ruleHighlights = [
  { mr: "बुकिंगनंतर तारीख बदल नाही व ॲडव्हान्स परत मिळणार नाही", en: "No date change after booking; the advance is non-refundable" },
  { mr: "बुकिंगसाठी ५०% ॲडव्हान्स", en: "50% advance to confirm the booking" },
  { mr: "उर्वरित रक्कम कार्यक्रमाच्या १० दिवस आधी", en: "Balance due 10 days before the event" },
  { mr: "हॉल: आदल्या दिवशी संध्या. ७ ते लग्नदिवशी संध्या. ६", en: "Hall: 7 PM the day before to 6 PM on the day" },
  { mr: "लॉन: दुपारी १२ ते रात्री १२", en: "Lawn: 12 noon to 12 midnight" },
]

export const rules = [
  {
    mr: "एकदा बुकिंग झाल्यानंतर तारीख बदलून मिळणार नाही तसेच बुकिंग रद्द झाल्यास दिलेला ॲडव्हान्स परत मिळणार नाही.",
    en: "Once booked, the date cannot be changed, and the advance is not refunded if the booking is cancelled.",
  },
  {
    mr: "बुकिंग निश्चित करण्यासाठी एकूण रकमेपैकी ५०% ॲडव्हान्स भरावा लागेल.",
    en: "A 50% advance of the total amount is required to confirm the booking.",
  },
  {
    mr: "बुकिंगच्या तारखेच्या किमान १० दिवस अगोदर उर्वरित १००% पेमेंट पूर्ण करणे बंधनकारक राहील.",
    en: "The remaining payment must be completed in full at least 10 days before the booking date.",
  },
  {
    mr: "बाहेरून बिछायत, डेकोरेशन किंवा भांडी आणण्यास परवानगी राहणार नाही, कारण हॉलमध्ये स्वत:ची सर्व व्यवस्था उपलब्ध आहे.",
    en: "Outside bedding, decoration or utensils are not allowed, as the hall provides all of these itself.",
  },
  {
    mr: "मॅरेज हॉल आदल्या दिवशी संध्याकाळी ७:०० वाजल्यापासून लग्नाच्या दिवशी संध्याकाळी ६:०० वाजेपर्यंत उपलब्ध राहील. त्यानंतर प्रति तास ₹३,००० अतिरिक्त शुल्क आकारले जाईल.",
    en: "The marriage hall is available from 7:00 PM the day before until 6:00 PM on the wedding day. After that, ₹3,000 per hour is charged extra.",
  },
  {
    mr: "लॉनची वेळ दुपारी १२:०० ते रात्री १२:०० पर्यंत राहील. निर्धारित वेळेनंतर प्रति तास ₹५,००० अतिरिक्त शुल्क आकारले जाईल.",
    en: "Lawn timing is 12:00 noon to 12:00 midnight. After that, ₹5,000 per hour is charged extra.",
  },
  {
    mr: "हॉल किंवा लॉनमध्ये झालेल्या कोणत्याही प्रकारच्या नुकसानाची पूर्ण जबाबदारी संबंधित पार्टीची राहील.",
    en: "The party is fully responsible for any damage to the hall or lawn.",
  },
  {
    mr: "हॉलमध्ये डीजे / बॅन्ड वाजवण्यास परवानगी राहणार नाही.",
    en: "DJ / band is not allowed in the hall.",
  },
  {
    mr: "हॉलमध्ये फटाके / कोल्ड पायरो वापरण्यास सक्त मनाई आहे. नियमांचे उल्लंघन आढळल्यास पार्टीकडून ₹१०,००० दंड तसेच झालेल्या सर्व नुकसानाची भरपाई वसूल करण्यात येईल.",
    en: "Crackers / cold pyro are strictly prohibited in the hall. Breaking this rule means a ₹10,000 fine plus full compensation for any damage.",
  },
  {
    mr: "लॉनमध्ये घोडा, बुलेट किंवा कोणत्याही 4-व्हीलरवर एन्ट्री करण्यास परवानगी राहणार नाही.",
    en: "Entry on a horse, Bullet motorbike or any four-wheeler is not allowed on the lawn.",
  },
  {
    mr: "रात्री १०:०० नंतर कोणत्याही प्रकारचे संगीत वाजविण्यास परवानगी राहणार नाही.",
    en: "No music of any kind is allowed after 10:00 PM.",
  },
  {
    mr: "रूमसाठी लॉक स्वत: आणावा तसेच सामानाची जबाबदारी स्वत: घ्यावी.",
    en: "Bring your own lock for the rooms; you are responsible for your belongings.",
  },
  {
    mr: "हॉलमध्ये मद्यपान, धूम्रपान व मांसाहार करण्यास सक्त मनाई आहे.",
    en: "Alcohol, smoking and non-vegetarian food are strictly prohibited in the hall.",
  },
]

export const ui = {
  viewPackages: { mr: "पॅकेजेस पहा", en: "View Packages" },
  call: { mr: "कॉल करा", en: "Call" },
  whatsapp: { mr: "WhatsApp", en: "WhatsApp" },
  enquire: { mr: "WhatsApp वर चौकशी करा", en: "Enquire on WhatsApp" },
  included: { mr: "पॅकेजमध्ये मिळणाऱ्या सुविधा", en: "Included in the package" },
  extras: { mr: "चार्जेस असलेल्या इतर सुविधा", en: "Available at extra charge" },
  spacesTitle: { mr: "आमची ठिकाणे", en: "Our Spaces" },
  packagesTitle: { mr: "पॅकेजेस", en: "Packages" },
  galleryTitle: { mr: "फोटो गॅलरी", en: "Gallery" },
  occasionsTitle: { mr: "आम्ही साजरे करतो", en: "We Host" },
  rulesTitle: { mr: "नियमावली", en: "Booking Rules" },
  rulesShowAll: { mr: "सर्व नियम पहा", en: "View all rules" },
  locationTitle: { mr: "पत्ता", en: "Location" },
  openMaps: { mr: "Google Maps मध्ये उघडा", en: "Open in Google Maps" },
  contactTitle: { mr: "संपर्क", en: "Contact" },
  language: { mr: "भाषा निवडा", en: "Choose language" },
  closePhoto: { mr: "फोटो बंद करा", en: "Close photo" },
  fromPrice: { mr: "पॅकेज फक्त {price} पासून", en: "Packages from {price}" },
  waGeneral: {
    mr: "नमस्कार, मला आई Celebration & BS Lawn च्या बुकिंगबद्दल माहिती हवी आहे.",
    en: "Hello, I'd like to know about booking Aai Celebration & BS Lawn.",
  },
  waPackage: {
    mr: "नमस्कार, मला {name} ({price}) बद्दल माहिती हवी आहे.",
    en: "Hello, I'd like to know more about the {name} ({price}).",
  },
}

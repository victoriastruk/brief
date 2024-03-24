// Припускаючи використання Node.js та MongoDB
const mongoose = require('mongoose');

const targetAudienceSchema = new mongoose.Schema({
  under16: { type: Boolean, default: false },
  age20_25: { type: Boolean, default: false },
  age30_35: { type: Boolean, default: false },
  age35_40: { type: Boolean, default: false },
  age40_45: { type: Boolean, default: false },
  age45_50: { type: Boolean, default: false },
  age50_55: { type: Boolean, default: false },
  age55_60: { type: Boolean, default: false },
  age60_65: { type: Boolean, default: false },
  over65: { type: Boolean, default: false }
});

const genderSchema = new mongoose.Schema({
  female: { type: Boolean, default: false },
  male: { type: Boolean, default: false }
})

const targetAudienceIncomeSchema = new mongoose.Schema({
  income1000_5000: { type: Boolean, default: false },
  income5000_10000: { type: Boolean, default: false },
  income10000_15000: { type: Boolean, default: false },
  income15000_20000: { type: Boolean, default: false },
  income20000_25000: { type: Boolean, default: false },
  over25000: { type: Boolean, default: false },
})

const custonerNesserySchema = new mongoose.Schema({
  brandingGoal: { type: Boolean, default: false },
  consumerInforming: { type: Boolean, default: false },
  clientPartnerEngagement: { type: Boolean, default: false },
  onlineSales: { type: Boolean, default: false },
  advertisingRevenue: { type: Boolean, default: false },
  expansionToNewMarkets: { type: Boolean, default: false },
  consumerFeedback: { type: Boolean, default: false },
})
const siteStructureSchema = new mongoose.Schema({
  yesStructure: { type: Boolean, default: false },
  noStructure: { type: Boolean, default: false }
})
const typeSiteSchema = new mongoose.Schema({
  singlePageWebsite: { type: Boolean, default: false },
  businessCardWebsite: { type: Boolean, default: false },
  landingPage: { type: Boolean, default: false },
  onlineStore: { type: Boolean, default: false },
  catalogWebsite: { type: Boolean, default: false },
  corporateWebsite: { type: Boolean, default: false },
  uniqueWebsite: { type: Boolean, default: false },
  frameworkWebsite: { type: Boolean, default: false },
})

preferredGraphicsSchema = new mongoose.Schema({
  photo: ({ type: Boolean, default: false }),
  picture: ({ type: Boolean, default: false }),
})

const animationSchema = new mongoose.Schema({
  icons: ({ type: Boolean, default: false }),
  pageTransition: ({ type: Boolean, default: false }),
  siteSplash: ({ type: Boolean, default: false }),
  designerChoice: ({ type: Boolean, default: false }),
  logo: ({ type: Boolean, default: false }),
  menu: ({ type: Boolean, default: false }),
})

const pagesSchema = new mongoose.Schema({
  homePage: ({ type: Boolean, default: false }),
  aboutCompany: ({ type: Boolean, default: false }),
  services: ({ type: Boolean, default: false }),
  portfolio: ({ type: Boolean, default: false }),
  ourTeam: ({ type: Boolean, default: false }),
  testimonials: ({ type: Boolean, default: false }),
  news: ({ type: Boolean, default: false }),
  articles: ({ type: Boolean, default: false }),
  partnersClients: ({ type: Boolean, default: false }),
  promotions: ({ type: Boolean, default: false }),
  jobVacancies: ({ type: Boolean, default: false }),
  blog: ({ type: Boolean, default: false }),
  photoGallery: ({ type: Boolean, default: false }),
  videoGallery: ({ type: Boolean, default: false }),
  prices: ({ type: Boolean, default: false }),
  events: ({ type: Boolean, default: false }),
  licensesCertificates: ({ type: Boolean, default: false }),
  downloadableDocuments: ({ type: Boolean, default: false }),
  contacts: ({ type: Boolean, default: false }),
  faq: ({ type: Boolean, default: false }),
  forum: ({ type: Boolean, default: false }),
  poll: ({ type: Boolean, default: false }),
  searchResults: ({ type: Boolean, default: false }),
  pageNotFound: ({ type: Boolean, default: false }),
  siteMap: ({ type: Boolean, default: false }),
  catalog: ({ type: Boolean, default: false }),
  orderForm: ({ type: Boolean, default: false }),
  productComparison: ({ type: Boolean, default: false }),
  personalAccount: ({ type: Boolean, default: false }),
  wishList: ({ type: Boolean, default: false }),
  paymentDelivery: ({ type: Boolean, default: false }),
})

const functionsSchema = new mongoose.Schema({
  siteSearch: ({ type: Boolean, default: false }),
  callbackOrder: ({ type: Boolean, default: false }),
  interactiveMap: ({ type: Boolean, default: false }),
  socialWidgets: ({ type: Boolean, default: false }),
  newsletterSubscription: ({ type: Boolean, default: false }),
  onlineConsultant: ({ type: Boolean, default: false }),
  internalBannerAdvertising: ({ type: Boolean, default: false }),
  floatingCart: ({ type: Boolean, default: false }),
  quickView: ({ type: Boolean, default: false }),
  registrationAuthorization: ({ type: Boolean, default: false }),
  catalogSearchFilter: ({ type: Boolean, default: false }),
  catalogSorting: ({ type: Boolean, default: false }),
  recommendedProducts: ({ type: Boolean, default: false }),
  discountCalculation: ({ type: Boolean, default: false }),
  bookingSystem: ({ type: Boolean, default: false }),
  onlineTryOn: ({ type: Boolean, default: false }),
  orderStatusNotification: ({ type: Boolean, default: false }),
  smsNotification: ({ type: Boolean, default: false }),
  paymentSystems: ({ type: Boolean, default: false }),
  invoiceGeneration: ({ type: Boolean, default: false }),
  dataImportExport: ({ type: Boolean, default: false }),
  customerSupportSystem: ({ type: Boolean, default: false }),
  costCalculationCalculator: ({ type: Boolean, default: false }),
  geographicalRegionDetection: ({ type: Boolean, default: false }),
})

const languagesSchema = new mongoose.Schema({
  ukr: ({type: Boolean, default: false }),
  eng: ({ type: Boolean, default: false }),
})

const textSchema = new mongoose.Schema({
  yesText: ({type: Boolean, default: false }),
  laterText: ({type: Boolean, default: false }),
  needText: ({type: Boolean, default: false }),
})

const photoSchema = new mongoose.Schema({
  yesPhoto: ({type: Boolean, default: false }),
  noPhoto: ({type: Boolean, default: false }),
  laterPhoto: ({type: Boolean, default: false }),
})

const videoSchema = new mongoose.Schema({
  yesVideo: ({type: Boolean, default: false }),
  noViodeo: ({type: Boolean, default: false }),
  laterVideo: ({type: Boolean, default: false }),
})
const promotionInSearchSchema = new mongoose.Schema({
  yesPromotionInSearch: ({type: Boolean, default: false }),
  noPromotionInSearch: ({type: Boolean, default: false }),
  needConsultInPromotionInSearch: ({type: Boolean, default: false }),
})

const promotionInSocialSchema = new mongoose.Schema({
  yesPromotionInSocial: ({type: Boolean, default: false }),
  noPromotionInSocial: ({type: Boolean, default: false }),
  needConsultInPromotionInSocial: ({type: Boolean, default: false }),
})

const formSchema = new mongoose.Schema({
  contactName: String,
  position: String,
  phone: String,
  email: String,
  additionalContacts: String,
  communicationPeriod: String,

  companyName: String,
  businessArea: String,
  companyPositioning: String,
  mainProducts: String,
  companyAdvantages: String,

  targetAudience: targetAudienceSchema,
  gender: genderSchema,
  targetAudienceOccupation: String,
  targetAudienceIncome: targetAudienceIncomeSchema,
  clientDecision: String,
  siteNecessity: String,
  custonerNessery: custonerNesserySchema,
  typeSite: typeSiteSchema,

  siteStructure: siteStructureSchema,
  competitors: String,
  competitorsSites: String,
  capabilitiesSites: String,

  colorPaletteCan: String,
  colorPalleteNot: String,
  preferredGraphics: preferredGraphicsSchema,

  animation: animationSchema,
  designIdeas: String,
  avoidDesign: String,

  pages: pagesSchema,
  functions: functionsSchema,
  languages: languagesSchema,
  otherLanguages: String,
  text: textSchema,
  photo: photoSchema,
  video: videoSchema,

  support: String, 
  promotionInSearch: promotionInSearchSchema,
  promotionInSocial: promotionInSocialSchema,

  expectedBudget: {
    type: Number,
    required: true,
    min: 1000,
    max: 100000
  },
  desiredProjectDeadline: {
    type: Number,
    required: true,
    min: 1,
    max: 12
  },
  mandatoryProjectDeadline: {
    type: Number,
    required: true,
    min: 1,
    max: 24
  }
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;

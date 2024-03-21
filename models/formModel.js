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
  brandingGoal: {type: Boolean, default: false},
  consumerInforming:{type: Boolean, default: false},
  clientPartnerEngagement:{type: Boolean, default: false},
  onlineSales:{type: Boolean, default: false},
  advertisingRevenue:{type: Boolean, default: false},
  expansionToNewMarkets:{type: Boolean, default: false},
  consumerFeedback:{type: Boolean, default: false},
})

const typeSiteSchema = new mongoose.Schema({
  singlePageWebsite: {type: Boolean, default: false},
  businessCardWebsite: {type: Boolean, default: false},
  landingPage: {type: Boolean, default: false},
  onlineStore: {type: Boolean, default: false},
  catalogWebsite: {type: Boolean, default: false},
  corporateWebsite: {type: Boolean, default: false},
  uniqueWebsite: {type: Boolean, default: false},
  frameworkWebsite: {type: Boolean, default: false},
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
  targetAudienceIncome:  targetAudienceIncomeSchema,
  clientDecision: String,
  siteNecessity: String,
  custonerNessery: custonerNesserySchema,
  typeSite: typeSiteSchema,



//   websitePurpose: [String],
//   websiteType: String,
//   hasWebsiteStructure: Boolean,
//   competitors: String,
//   uniqueOffering: String,
//   colorPalette: [String],
//   graphicMaterials: String,
//   preferredGraphics: [String],
//   designIdeas: String,
//   requiredPages: [String],
//   websiteFunctionality: [String],
//   languageVersions: [String],
//   contentPreparation: String,
//   contentPhotos: String,
//   contentVideos: String,
//   maintenance: String,
//   seo: String,
//   socialMediaPromotion: String,
//   projectBudget: String,
//   desiredDeadline: String,
//   mandatoryDeadline: String,
//   additionalInfo: String
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;

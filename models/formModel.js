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
//   targetAudienceAge: [String],
//   targetAudienceGender: String,
//   targetAudienceOccupation: String,
//   targetAudienceIncome: [String],
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

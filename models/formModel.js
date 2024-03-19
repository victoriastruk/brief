// Припускаючи використання Node.js та MongoDB
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  contactName: String,
//   position: String,
//   phone: String,
//   email: String,
//   additionalContacts: String,
//   communicationPeriod: String,
//   companyName: String,
//   businessArea: String,
//   companyPositioning: String,
//   mainProducts: String,
//   companyAdvantages: String,
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

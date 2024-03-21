document.getElementById('projectBriefForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        contactName: document.getElementById('contactName').value, // Отримати значення поля "Контактна особа(ПІБ)"
        position: document.getElementById('position').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        additionalContacts: document.getElementById('additionalContacts').value,
        communicationPeriod: document.getElementById('communicationPeriod').value,
        
        companyName: document.getElementById('companyName').value,
        businessArea: document.getElementById('businessArea').value,
        companyPositioning: document.getElementById('companyPositioning').value,
        mainProducts: document.getElementById('mainProducts').value,
        companyAdvantages: document.getElementById('companyAdvantages').value,

        targetAudience: {
            under16: document.getElementById('age-under-16').checked ? true : undefined,
            age20_25: document.getElementById('age-20-25').checked ? true : undefined,
            age30_35: document.getElementById('age-30-35').checked ? true : undefined,
            age35_40: document.getElementById('age-35-40').checked ? true : undefined,
            age40_45: document.getElementById('age-40-45').checked ? true : undefined,
            age45_50: document.getElementById('age-45-50').checked ? true : undefined,
            age50_55: document.getElementById('age-50-55').checked ? true : undefined,
            age55_60: document.getElementById('age-55-60').checked ? true : undefined,
            age60_65: document.getElementById('age-60-65').checked ? true : undefined,
            over65: document.getElementById('age-over-65').checked ? true : undefined
        },

        gender: {
            female: document.getElementById('female').checked ? true : undefined,
            male: document.getElementById('male').checked ? true : undefined,
        },

        targetAudienceOccupation: document.getElementById('targetAudienceOccupation').value,

        targetAudienceIncome: {
            income1000_5000: document.getElementById('income-1000-5000').checked ? true : undefined,
            income5000_10000: document.getElementById('income-5000-10000').checked ? true : undefined,
            income10000_15000: document.getElementById('income-10000-15000').checkend ? true : undefined,
            income15000_20000: document.getElementById('income-15000-20000').checked ? true : undefined,
            income20000_25000: document.getElementById('income-20000-25000').checked ? true : undefined,
            over25000: document.getElementById('income-over-25000').checked ? true : undefined,
        },

        clientDecision: document.getElementById('clientDecision').value,
        siteNecessity: document.getElementById('siteNecessity').value,

        custonerNessery: {
            brandingGoal: document.getElementById('brandingGoal').checked ? true : undefined,
            consumerInforming:document.getElementById('consumerInforming').checked ? true : undefined,
            clientPartnerEngagement:document.getElementById('clientPartnerEngagement').checked ? true : undefined,
            onlineSales:document.getElementById('onlineSales').checked ? true : undefined,
            advertisingRevenue:document.getElementById('advertisingRevenue').checked ? true : undefined,
            expansionToNewMarkets:document.getElementById('expansionToNewMarkets').checked ? true : undefined,
            consumerFeedback:document.getElementById('consumerFeedback').checked ? true : undefined,
        },

        typeSite: {
            singlePageWebsite: document.getElementById('singlePageWebsite').checked ? true : undefined,
            businessCardWebsite: document.getElementById('businessCardWebsite').checked ? true : undefined,
            landingPage: document.getElementById('landingPage').checked ? true : undefined,
            onlineStore: document.getElementById('onlineStore').checked ? true : undefined,
            catalogWebsite: document.getElementById('catalogWebsite').checked ? true : undefined,
            corporateWebsite:document.getElementById('corporateWebsite').checked ? true : undefined,
            uniqueWebsite: document.getElementById('uniqueWebsite').checked ? true : undefined,
            frameworkWebsite: document.getElementById('frameworkWebsite').checked ? true : undefined,
        }
       // Додати інші поля тут 
    };
    // Object.keys(formData.gender).forEach(key => {
    //     if (formData.gender[key] === undefined) {
    //         delete formData.gender[key];
    //     }
    // });
    // // Видалення пустих значень з об'єкта formData
    // Object.keys(formData.targetAudience).forEach(key => {
    //     if (formData.targetAudience[key] === undefined) {
    //         delete formData.targetAudience[key];
    //     }
    // });

   
        


    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(formData) 
    })
    .then(response => response.json()) 
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Помилка fetch:', error);
    });
});

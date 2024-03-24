document.getElementById('projectBriefForm').addEventListener('submit', function (e) {
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
            consumerInforming: document.getElementById('consumerInforming').checked ? true : undefined,
            clientPartnerEngagement: document.getElementById('clientPartnerEngagement').checked ? true : undefined,
            onlineSales: document.getElementById('onlineSales').checked ? true : undefined,
            advertisingRevenue: document.getElementById('advertisingRevenue').checked ? true : undefined,
            expansionToNewMarkets: document.getElementById('expansionToNewMarkets').checked ? true : undefined,
            consumerFeedback: document.getElementById('consumerFeedback').checked ? true : undefined,
        },

        typeSite: {
            singlePageWebsite: document.getElementById('singlePageWebsite').checked,
            businessCardWebsite: document.getElementById('businessCardWebsite').checked,
            landingPage: document.getElementById('landingPage').checked,
            onlineStore: document.getElementById('onlineStore').checked,
            catalogWebsite: document.getElementById('catalogWebsite').checked,
            corporateWebsite: document.getElementById('corporateWebsite').checked,
            uniqueWebsite: document.getElementById('uniqueWebsite').checked,
            frameworkWebsite: document.getElementById('frameworkWebsite').checked,
        },
        siteStructure: {
            yesStructure: document.getElementById('yesStructure').checked,
            noStructure: document.getElementById('noStructure').checked,
        },
        competitors: document.getElementById('competitors').value,
        competitorsSites: document.getElementById('competitorsSites').value,
        capabilitiesSites: document.getElementById('capabilitiesSites').value,

        colorPaletteCan: document.getElementById('colorPaletteCan').value,
        colorPalleteNot: document.getElementById('colorPalleteNot').value,

        preferredGraphics: {
            photo: document.getElementById('photo').checked,
            picture: document.getElementById('picture').checked,
        },

        animation: {
            icons: document.getElementById('icons').checked ? true : undefined,
            pageTransition: document.getElementById('pageTransition').checked ? true : undefined,
            siteSplash: document.getElementById('siteSplash').checked ? true : undefined,
            designerChoice: document.getElementById('designerChoice').checked ? true : undefined,
            logo: document.getElementById('logo').checked ? true : undefined,
            menu: document.getElementById('menu').checked ? true : undefined,
        },
        designIdeas: document.getElementById('designIdeas').value,
        avoidDesign: document.getElementById('avoidDesign').value,

        pages: {
            homePage: document.getElementById('homePage').checked ? true : undefined,
            aboutCompany: document.getElementById('aboutCompany').checked ? true : undefined,
            services: document.getElementById('services').checked ? true : undefined,
            portfolio: document.getElementById('portfolio').checked ? true : undefined,
            ourTeam: document.getElementById('ourTeam').checked ? true : undefined,
            testimonials: document.getElementById('testimonials').checked ? true : undefined,
            news: document.getElementById('news').checked ? true : undefined,
            articles: document.getElementById('articles').checked ? true : undefined,
            partnersClients: document.getElementById('partnersClients').checked ? true : undefined,
            promotions: document.getElementById('promotions').checked ? true : undefined,
            jobVacancies: document.getElementById('jobVacancies').checked ? true : undefined,
            blog: document.getElementById('blog').checked ? true : undefined,
            photoGallery: document.getElementById('photoGallery').checked ? true : undefined,
            videoGallery: document.getElementById('videoGallery').checked ? true : undefined,
            prices: document.getElementById('prices').checked ? true : undefined,
            events: document.getElementById('events').checked ? true : undefined,
            licensesCertificates: document.getElementById('licensesCertificates').checked ? true : undefined,
            downloadableDocuments: document.getElementById('downloadableDocuments').checked ? true : undefined,
            contacts: document.getElementById('contacts').checked ? true : undefined,
            faq: document.getElementById('faq').checked ? true : undefined,
            forum: document.getElementById('forum').checked ? true : undefined,
            poll: document.getElementById('poll').checked ? true : undefined,
            searchResults: document.getElementById('searchResults').checked ? true : undefined,
            pageNotFound: document.getElementById('pageNotFound').checked ? true : undefined,
            siteMap: document.getElementById('siteMap').checked ? true : undefined,
            catalog: document.getElementById('catalog').checked ? true : undefined,
            orderForm: document.getElementById('orderForm').checked ? true : undefined,
            productComparison: document.getElementById('productComparison').checked ? true : undefined,
            personalAccount: document.getElementById('personalAccount').checked ? true : undefined,
            wishList: document.getElementById('wishList').checked ? true : undefined,
            paymentDelivery: document.getElementById('paymentDelivery').checked ? true : undefined,
        },

        functions: {
            siteSearch: document.getElementById('siteSearch').checked ? true : undefined,
            callbackOrder: document.getElementById('callbackOrder').checked ? true : undefined,
            interactiveMap: document.getElementById('interactiveMap').checked ? true : undefined,
            socialWidgets: document.getElementById('socialWidgets').checked ? true : undefined,
            newsletterSubscription: document.getElementById('newsletterSubscription').checked ? true : undefined,
            onlineConsultant: document.getElementById('onlineConsultant').checked ? true : undefined,
            internalBannerAdvertising: document.getElementById('internalBannerAdvertising').checked ? true : undefined,
            floatingCart: document.getElementById('floatingCart').checked ? true : undefined,
            quickView: document.getElementById('quickView').checked ? true : undefined,
            registrationAuthorization: document.getElementById('promotions').checked ? true : undefined,
            catalogSearchFilter: document.getElementById('catalogSearchFilter').checked ? true : undefined,
            catalogSorting: document.getElementById('catalogSorting').checked ? true : undefined,
            recommendedProducts: document.getElementById('recommendedProducts').checked ? true : undefined,
            discountCalculation: document.getElementById('discountCalculation').checked ? true : undefined,
            bookingSystem: document.getElementById('bookingSystem').checked ? true : undefined,
            onlineTryOn: document.getElementById('onlineTryOn').checked ? true : undefined,
            orderStatusNotification: document.getElementById('orderStatusNotification').checked ? true : undefined,
            smsNotification: document.getElementById('smsNotification').checked ? true : undefined,
            paymentSystems: document.getElementById('paymentSystems').checked ? true : undefined,
            invoiceGeneration: document.getElementById('invoiceGeneration').checked ? true : undefined,
            dataImportExport: document.getElementById('dataImportExport').checked ? true : undefined,
            customerSupportSystem: document.getElementById('customerSupportSystem').checked ? true : undefined,
            costCalculationCalculator: document.getElementById('costCalculationCalculator').checked ? true : undefined,
            geographicalRegionDetection: document.getElementById('geographicalRegionDetection').checked ? true : undefined,
        },

        languages: {
            ukr: document.getElementById('ukr').checked ? true : undefined,
            eng: document.getElementById('eng').checked ? true : undefined,
        },
        otherLanguages: document.getElementById('otherLanguages').value,

        text: {
            yesText: document.getElementById('yesText').checked,
            laterText: document.getElementById('laterText').checked,
            needText: document.getElementById('needText').checked,
        },

        photo: {
            yesPhoto: document.getElementById('yesPhoto').checked,
            noPhoto: document.getElementById('noPhoto').checked,
            laterPhoto: document.getElementById('laterPhoto').checked,
        },

        video: {
            yesVideo: document.getElementById('yesVideo').checked,
            noViodeo: document.getElementById('noViodeo').checked,
            laterVideo: document.getElementById('laterVideo').checked,
        },
        support: document.getElementById('support').value,

        promotionInSearch: {
            yesPromotionInSearch: document.getElementById('yesPromotionInSearch').checked,
            noPromotionInSearch: document.getElementById('noPromotionInSearch').checked,
            needConsultInPromotionInSearch: document.getElementById('needConsultInPromotionInSearch').checked,
        },
        promotionInSocial: {
            yesPromotionInSocial: document.getElementById('yesPromotionInSocial').checked,
            noPromotionInSocial: document.getElementById('noPromotionInSocial').checked,
            needConsultInPromotionInSocial: document.getElementById('needConsultInPromotionInSocial').checked,
        },

        expectedBudget: document.getElementById('budgetRange').value,
        desiredProjectDeadline: document.getElementById('desiredDeadlineRange').value,
        mandatoryProjectDeadline: document.getElementById('mandatoryDeadlineRange').value
        // Додати інші поля тут 
    };

    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            alert("Форму успішно відправлено!");
            document.getElementById('projectBriefForm').reset();
        })
        .catch(error => {
            console.error('Помилка fetch:', error);
        });
});

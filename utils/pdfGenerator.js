const PDFDocument = require('pdfkit');



exports.generatePDF = async (formData) => {
    const doc = new PDFDocument();
    let buffers = [];
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
        let pdfData = Buffer.concat(buffers);
        return pdfData;
    });
    doc.font('ArialNarrow.ttf');
    doc.text('Форма відповідей:', 100, 20, {
        underline: true
    });

    doc.text('Загальні відомості', 50, 40, { 
        underline: true
    });

    doc.text(`Контактна особа(ПІБ): ${formData.contactName}`);
    doc.text(`Посада: ${formData.position}`);
    doc.text(`Телефон: ${formData.phone}`);
    doc.text(`Email: ${formData.email}`);
    doc.text(`Інше(Skype, Viber, Telegram тощо): ${formData.additionalContacts}`);
    doc.text(`Зручний період для спілкування: ${formData.communicationPeriod}`);
   
    doc.text('Інформація про компанію', 50, 150, { 
        underline: true
    });
    doc.text(`Назва компанії: ${formData.companyName}`);
    doc.text(`Сфера діяльності компанії: ${formData.businessArea}`);
    doc.text(`Позиціонування компанії(ніша): ${formData.companyPositioning}`);
    doc.text(`Основні продукти та послуги: ${formData.mainProducts}`);
    doc.text(`Переваги вашої компанії: ${formData.companyAdvantages}`);

    doc.text('Цільова аудиторія', 50, 270, { 
        underline: true
    });
    
    const ageRanges = [];
    if (formData.targetAudience.under16) ageRanges.push('До 16');
    if (formData.targetAudience.age20_25) ageRanges.push('20-25');
    if (formData.targetAudience.age30_35) ageRanges.push('30-35');
    if (formData.targetAudience.age35_40) ageRanges.push('35-40');
    if (formData.targetAudience.age40_45) ageRanges.push('40-45');
    if (formData.targetAudience.age45_50) ageRanges.push('45-50');
    if (formData.targetAudience.age50_55) ageRanges.push('50-55');
    if (formData.targetAudience.age55_60) ageRanges.push('55-60');
    if (formData.targetAudience.age60_65) ageRanges.push('60-65');
    if (formData.targetAudience.over65) ageRanges.push('Більше 65');

    doc.text(`Вік: ${ageRanges.join(', ')}`);
  
    const gender = [];
    if (formData.gender.female) gender.push('жіноча');
    if (formData.gender.male) gender.push('чоловіча');
    doc.text(`Стать: ${gender.join(', ' )}`);
    doc.text(`Рід занять: ${formData.targetAudienceOccupation}`);

    const incomeRanges = [];
    if (formData.targetAudienceIncome.income1000_5000) incomeRanges.push('1 000 - 5 000');
    if (formData.targetAudienceIncome.income5000_10000) incomeRanges.push('5 000 - 10 000');
    if (formData.targetAudienceIncome.income10000_15000) incomeRanges.push('10 000 - 15 000');
    if (formData.targetAudienceIncome.income15000_20000) incomeRanges.push('15 000 - 20 000');
    if (formData.targetAudienceIncome.income20000_25000) incomeRanges.push('20 000 - 25 000');
    if (formData.targetAudienceIncome.over25000) incomeRanges.push('більше 25 000');

    doc.text(`Дохід(грн): ${incomeRanges.join(', ')}`);
    doc.text(`Як вирішують стати клієнтом Вашої компанії?`);
    doc.text(formData.clientDecision);
    doc.text(`Навіщо їм потрібний Ваш сайт?`);
    doc.text(formData.siteNecessity);

    const customerNecessery = [];
    if (formData.custonerNessery.brandingGoal) customerNecessery.push('Імміджева мета');
    if (formData.custonerNessery.brandingGoal) customerNecessery.push('Інформування споживачів');
    if (formData.custonerNessery.clientPartnerEngagement) customerNecessery.push('Залучення клієнтів/партнерів');
    if (formData.custonerNessery.onlineSales) customerNecessery.push('Продаж товарів через Інтернет');
    if (formData.custonerNessery.advertisingRevenue) customerNecessery.push('Прибуток від реклами');
    if (formData.custonerNessery.expansionToNewMarkets) customerNecessery.push('Вихід на нові ринки');
    if (formData.custonerNessery.consumerFeedback) customerNecessery.push(`Зворотний зв'язок із споживачем`);
    doc.text(`Для чого Вам потрібен сайт:`,{ 
        underline: true
    });
    doc.text(customerNecessery.join(', ' ));

    const typeSite = [];
    if (formData.typeSite.singlePageWebsite) typeSite.push("Односторінковий сайт");
    if (formData.typeSite.businessCardWebsite) typeSite.push("Сайт візитівка");
    if (formData.typeSite.landingPage) typeSite.push("Landing page");
    if (formData.typeSite.onlineStore) typeSite.push("Інтернет магазин");
    if (formData.typeSite.catalogWebsite) typeSite.push("Сайт каталогів");
    if (formData.typeSite.corporateWebsite) typeSite.push("Корпоративний сайт");
    if (formData.typeSite.uniqueWebsite) typeSite.push("Унікальний сайт");
    if (formData.typeSite.frameworkWebsite) typeSite.push("Сайт на Framework");
    doc.text(`Тип сайту:`,{ 
        underline: true
    });
    doc.text(typeSite.join(', ' ));

    doc.end();

    return new Promise((resolve, reject) => {
        doc.on('end', () => {
            const pdfBuffer = Buffer.concat(buffers);
            resolve(pdfBuffer);
        });
    });
};

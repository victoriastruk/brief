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

    // Рядки з відомостями
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

    doc.end();

    return new Promise((resolve, reject) => {
        doc.on('end', () => {
            const pdfBuffer = Buffer.concat(buffers);
            resolve(pdfBuffer);
        });
    });
};

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
    doc.text('Форма відповідей:', {
        underline: true
    });

    doc.text('Загальні відомості', 100, 100, { 
        underline: true
    });

    // Рядки з відомостями
    doc.text(`Контактна особа(ПІБ): ${formData.contactName}`);
    doc.text(`Посада: ${formData.position}`);
    doc.text(`Телефон: ${formData.phone}`);
    doc.text(`Email: ${formData.email}`);
    doc.text(`Інше(Skype, Viber, Telegram тощо): ${formData.additionalContacts}`);
    doc.text(`Зручний період для спілкування: ${formData.communicationPeriod}`);

    doc.end();

    return new Promise((resolve, reject) => {
        doc.on('end', () => {
            const pdfBuffer = Buffer.concat(buffers);
            resolve(pdfBuffer);
        });
    });
};

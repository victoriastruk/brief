const PDFDocument = require('pdfkit');

exports.generatePDF = async (formData) => {
    const doc = new PDFDocument;
    let buffers = [];
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
        let pdfData = Buffer.concat(buffers);
        return pdfData;
    });

    doc.text('Form Responses:', {
        underline: true
    });

    doc.text(`Contact Name: ${formData.contactName}`, 100, 100);
    // Тут  продовжити додавати інформацію з formData

    doc.end();

    return new Promise((resolve, reject) => {
        doc.on('end', () => {
            const pdfBuffer = Buffer.concat(buffers);
            resolve(pdfBuffer);
        });
    });
};

const Form = require('../models/formModel');
const pdfGenerator = require('../utils/pdfGenerator');

exports.submitForm = async (req, res) => {
    try {
        const form = new Form(req.body); 
        await form.save();
        res.status(201).send({ message: 'Form successfully submitted!', formId: form._id });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteBrief = async (req, res) => {
    try {
        const result = await Form.findByIdAndDelete(req.params.id);
        if (result) {
            res.status(200).send({ message: 'Form successfully deleted!', deletedFormId: req.params.id });
        } else {
            res.status(404).send({ message: 'Form not found!' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.downloadFormAsPDF = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) {
            return res.status(404).send({ message: 'Form not found!' });
        }
        const pdfBuffer = await pdfGenerator.generatePDF(form);
        res.type('application/pdf');
        res.send(pdfBuffer);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAllBriefs = async (req, res) => {
    try {
        const briefs = await Form.find();
        res.status(200).json(briefs);
    } catch (error) {
        res.status(500).send(error);
    }
};
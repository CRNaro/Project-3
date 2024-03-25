const { Schema } = require('mongoose');

const serviceSchema = require('./Service');

const productSchema = new Schema({
    manufacturer: {
        type: String,
        required: false,
    },
    serialNumber: {
        type: String,
        required: false,
    },
    modelNumber: {
        type: String,
        required: false,
    },
    installDate: {
        type: String,
        required: false,
    },
    warrantyDuration: {
        type: String,
        required: false,
    },
    cost: {
        type: String,
        required: false,
    },
    manual: {
        type: String,
        required: false,
    },
    installationNotes: {
        type: String,
        required: false,
    },
    installedBy: {
        type: String,
        required: false,
    },
    
});

module.exports = productSchema;

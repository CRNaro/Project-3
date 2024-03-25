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
        required: true,
    },
    manual: {
        type: String,
        required: true,
    },
    installationNotes: {
        type: String,
        required: true,
    },
    installedBy: {
        type: String,
        required: true,
    },
});

module.exports = productSchema;

const { Schema } = require('mongoose');

const serviceSchema = new Schema({
    notes: {
        type: String,
        required: false,
    },
    charge: {
        type: String,
        required: false,
    },
    serviceDate: {
        type: String,
        required: false,
    },
    warrantyDuration: {
        type: String,
        required: false,
    },
    serviceNotes: {
        type: String,
        required: false,
    },
});

module.exports = serviceSchema;

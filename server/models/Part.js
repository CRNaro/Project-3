const { Schema } = require('mongoose');

const partSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    partNumber: {
        type: String,
        required: false,
    },
    cost: {
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
    installedBy: {
        type: String,
        required: true,
    },
});

module.exports = partSchema;

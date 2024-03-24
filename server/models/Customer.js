const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import partSchema from Product.js
const productSchema = require('./Product');

// import partSchema from Parts.js
const partSchema = require('./Part.js');

const customerSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            unique: false,
        },
        lastName: {
            type: String,
            required: true,
            unique: false,
        },
        phoneNumber: {
            type: Number,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        customerNotes: {
            type: String,
            required: false,
        },
        // set savedBooks to be an array of data that adheres to the bookSchema
        products: [productSchema],
        parts: [partSchema],
    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
    }
);


// custom method to compare and validate password for logging in
customerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

customerSchema.virtual('product').get(function () {
    return this.products.length;
});

customerSchema.virtual('part').get(function () {
    return this.parts.length;
});

const Customer = model('Customer', customerSchema);

module.exports = Customer;

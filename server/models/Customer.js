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
            required: true,
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

// hash user password
customerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
customerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
customerSchema.virtual('products').get(function () {
    return this.products.length;
});

customerSchema.virtual('parts').get(function () {
    return this.parts.length;
});

const Customer = model('Customer', customerSchema);

module.exports = Customer;

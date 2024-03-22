const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const employeeSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
          },
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
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        }
    },
);

// hash user password
employeeSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// custom method to compare and validate password for logging in
employeeSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Employee = model('Employee', employeeSchema);

module.exports = Employee;
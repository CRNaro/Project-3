const { Employee, Customer } = require('../models');

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
<<<<<<< HEAD
        customerInfo: async (parent, {email, lastName}, context) => {
            if (context.user && email) {
                return await Customer.findOne({ email });
            }
            if (context.user && lastName) {
                return await Customer.findOne({ lastName });
=======
        me: async (parent, args, context) => {
            if (context.user) {
                return await user.findOne({ _id: context.user._id });
>>>>>>> beb22ed4a71706e80435613a6b5367763c4413aa
            }
            throw AuthenticationError;
        },
    },
    Mutation: {
        addEmployee: async (parent, {firstName, lastName, username, email, password}) => {
            const employee = await Employee.create({firstName, lastName, username, email, password});
            const token = signToken(employee);

            return { token, employee };
        },
     
        login: async (parent, { email, password }) => {
            const employee = await Employee.findOne( { email });
            if (!employee) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const correctPw = await employee.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const token = signToken(employee);
            return { token, employee };
        },
        addCustomer: async (parent, { customer }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: {savedCustomers: customer} },
                    { new: true }
                )
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        // findCustomer: async (parent, { customerId }, context) => {
        //     if (context.user) {
        //         const user = await User.findOne({ _id: context.user._id });
        //         if (!user) {
        //             throw new UserInputError('User not found');
        //         }
        
        //         // Check if the customer is in the user's saved customers
        //         const customer = user.savedCustomers.find(savedCustomer => savedCustomer._id.toString() === customerId);
        
        //         if (!customer) {
        //             throw new UserInputError('Customer not found in saved customers');
        //         }
        
        //         return customer;
        //         assignPartsToCustomer: async (parent, { customerId, parts }, context) => {
        //             if (context.user) {
        //                 const user = await User.findOne({ _id: context.user._id });
        //                 if (!user) {
        //                     throw new UserInputError('User not found');
        //                 }
                
        //                 // Find the customer in the user's saved customers
        //                 const customer = user.savedCustomers.find(savedCustomer => savedCustomer._id.toString() === customerId);
                
        //                 if (!customer) {
        //                     throw new UserInputError('Customer not found in saved customers');
        //                 }
                
        //                 // Assign parts to the customer
        //                 customer.parts = parts;
                
        //                 await user.save();
                

        //                 return customer;
        //             }
        //             throw new AuthenticationError('You need to be logged in!');
        //             assignProductsToCustomer: async (parent, { customerId, products }, context) => {
        //                 if (context.user) {
        //                     const user = await User.findOne({ _id: context.user._id });
        //                     if (!user) {
        //                         throw new UserInputError('User not found');
        //                     }
                    
        //                     // Find the customer in the user's saved customers
        //                     const customer = user.savedCustomers.find(savedCustomer => savedCustomer._id.toString() === customerId);
                    
        //                     if (!customer) {
        //                         throw new UserInputError('Customer not found in saved customers');
        //                     }
                    
        //                     // Assign products to the customer
        //                     customer.products = products;
                    
        //                     await user.save();
                    
        //                     return customer;
        //                 }
        //                 throw new AuthenticationError('You need to be logged in!');
        //             }

                    
        //         }
                
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        // },
        
    }
  };
  
  module.exports = resolvers;
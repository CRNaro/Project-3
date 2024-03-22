const { User, Customer } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
     
        login: async (parent, { email, password }) => {
            const user = await User.findOne( { email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const token = signToken(user);
            return { token, user };
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
        findCustomer: async (parent, { customerId }, context) => {
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id });
                if (!user) {
                    throw new UserInputError('User not found');
                }
        
                // Check if the customer is in the user's saved customers
                const customer = user.savedCustomers.find(savedCustomer => savedCustomer._id.toString() === customerId);
        
                if (!customer) {
                    throw new UserInputError('Customer not found in saved customers');
                }
        
                return customer;
                assignPartsToCustomer: async (parent, { customerId, parts }, context) => {
                    if (context.user) {
                        const user = await User.findOne({ _id: context.user._id });
                        if (!user) {
                            throw new UserInputError('User not found');
                        }
                
                        // Find the customer in the user's saved customers
                        const customer = user.savedCustomers.find(savedCustomer => savedCustomer._id.toString() === customerId);
                
                        if (!customer) {
                            throw new UserInputError('Customer not found in saved customers');
                        }
                
                        // Assign parts to the customer
                        customer.parts = parts;
                
                        await user.save();
                
                        return customer;
                    }
                    throw new AuthenticationError('You need to be logged in!');
                    assignProductsToCustomer: async (parent, { customerId, products }, context) => {
                        if (context.user) {
                            const user = await User.findOne({ _id: context.user._id });
                            if (!user) {
                                throw new UserInputError('User not found');
                            }
                    
                            // Find the customer in the user's saved customers
                            const customer = user.savedCustomers.find(savedCustomer => savedCustomer._id.toString() === customerId);
                    
                            if (!customer) {
                                throw new UserInputError('Customer not found in saved customers');
                            }
                    
                            // Assign products to the customer
                            customer.products = products;
                    
                            await user.save();
                    
                            return customer;
                        }
                        throw new AuthenticationError('You need to be logged in!');
                    }
                    
                }
                
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        
    }
  };
  
  module.exports = resolvers;
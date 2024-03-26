const { Employee, Customer } = require('../models');

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Types } = require('mongoose');

const resolvers = {
  Query: {
    customerInfo: async (parent, { email, lastName }, context) => {
      if (context.user) {
        const customer = await Customer.findOne({
          $or: [{ email: email }, { lastName: lastName }],
        });
        if (customer) {
          return customer;
        }
      }
      throw new AuthenticationError('You need to be logged in!');
      // if (context.user && email) {
      //     return await Customer.findOne({ email });
      // }
      // if (context.user && lastName) {
      //     return await Customer.findOne({ lastName });
      // }
      // throw AuthenticationError;
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await Employee.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    addEmployee: async (parent, { firstName, lastName, username, email, password }) => {
      const employee = await Employee.create({ firstName, lastName, username, email, password });
      const token = signToken(employee);

      return { token, employee };
    },

    login: async (parent, { email, password }) => {
      const employee = await Employee.findOne({ email });
      if (!employee) {
        throw new AuthenticationError('Incorrect credentials')
      }
      const correctPw = await employee.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials')
      }
      const token = signToken(employee);
      return { token, employee };
    },
    addCustomer: async (parent, { firstName, lastName, phoneNumber, email }, context) => {
      if (context.user) {
        const customerNotes = ''
        const products = []
        const parts = []
        return await Customer.create({ firstName, lastName, phoneNumber, email, customerNotes, products, parts })
      }
      throw new AuthenticationError('You need to be logged in!')
    },
    addProduct: async (parent, { customerId, name, manufacturer, serialNumber, modelNumber, installDate, warrantyDuration, cost, manual, installationNotes, installedBy }, context) => {
      if (context.user) {
        return Customer.findOneAndUpdate(
          {
            _id: customerId
          },
          {
            $addToSet: {
              products: { _id: new Types.ObjectId(),name, manufacturer, serialNumber, modelNumber, installDate, warrantyDuration, cost, manual, installationNotes, installedBy, },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    deleteProduct: async (parent, { customerId, productId, }, context) => {
      if (context.user) {
        return Customer.findOneAndUpdate(
          { _id: customerId },
          { $pull: { products: { _id: productId } } },
          { new: true }
        );
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    saveNote: async (parent, { customerNotes, customerId }, context) => {
      if (context.user) {
        return Customer.findByIdAndUpdate({ _id: customerId }, { customerNotes: customerNotes, },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
      ('You need to be logged in!');
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




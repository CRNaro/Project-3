const typeDefs=
`
type Employee {
    _id: ID
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
}
type Customer {
    _id: ID
    firstName: String!
    lastName: String!
    phoneNumber: Float!
    email: String!
    customerNotes: String
    products: [Product]
    parts: [Part]
    
}

type Product {
    _id: ID
    name: String!
    manufacturer: String
    serialNumber: String
    modelNumber: String
    installDate: String
    warrantyDuration: String
    cost: String
    manual: String
    installationNotes: String
    installedBy: String
}

type Service {
    notes: String
    charge: String
    serviceDate: String
    warrantyDuration:String
    serviceNotes: String
}

type Part {
    _id: ID
    name: String
    partNumber: String
    cost: String
    installDate: String
    warrantyDuration: String
    installedBy: String
}
type Auth {
    token: ID!
    employee: Employee
}

type Query {
    customerInfo(email: String, lastName: String): Customer
    me: Employee
}

type Mutation {
    login(email: String!, password: String!): Auth
    addEmployee(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    addCustomer(firstName: String!, lastName: String!, phoneNumber: Float!, email: String!): Customer
    deleteProduct(customerId: String!, productId: String!,): Customer
    addProduct(customerId: String!, name: String, manufacturer: String, serialNumber: String, modelNumber: String, installDate: String, warrantyDuration: String, cost: String, manual: String, installationNotes: String, installedBy: String): Customer
    saveNote( customerId: String!, customerNotes: String!):Customer
}

`;

module.exports = typeDefs;

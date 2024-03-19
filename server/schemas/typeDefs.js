const typeDefs=
`
type Employee {
    _id: ID
    userName: String!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    adminStatus: String!
}
type Customer {
    _id: ID
    firstName: String
    lastName: String
    phoneNumber: Int
    email: String
    customerNotes: String
    products: [Product]
    parts: [Part]
}

type Product {
    _id: ID
    manufacturer: String
    serialNumber: String
    modelNumber: String
    installDate: String
    warrantyDuration: String
    cost: String
    manual: String
    installationNotes: String
    installedBy: String
    service: [Service]
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
    user: Employee,
    token: ID!
}

type Query {
    me: Employee
}

type Mutation {
    login(userName: String!, password: String!): Auth
    addEmployee(firstName: String!, lastName: String!, userName: String!, password: String!, adminStatus: String!): Auth
    addCustomer(firstName: String!, lastName: String!, phoneNumber: Int, email: String, customerNote: String, products: [String]!): Auth
}
`;

module.exports = typeDefs;

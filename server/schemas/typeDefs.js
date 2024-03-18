const typeDefs=
`
type Employee {
    _id: ID
    firstName: String
    lastName: String
    password: String
    userName: String
    adminStatus: String
}
type Customer {
    _id: ID
    firstName: String
    lastName: String
    phoneNumber: Int
    email: String
    customerNotes: String
    products: [Product]
}

type Product {
    _id: ID
    type: String
    make: String
    model: String
    installDate: String
    warrantyDuration: String
    cost: String
    manual: String
    installationNotes: String
    installedBy: [Employee]
    service: [Service]
}

type Service {
    type: String
    charge: String
    serviceDate: String
    warrantyDuration:String
    serviceNotes: String
    product: Product
}

type Parts {
    _id: ID
    name: String
    partNumber: String
    cost: String
    parentProduct: Product
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

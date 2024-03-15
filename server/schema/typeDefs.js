const typeDefs=
`
type Employee {
    _id: ID
    firstName: STRING
    lastName: STRING
    password: STRING
    userName: STRING
    adminStatus: STRING
}
type Customer {
    _id: ID
    firstName: STRING
    lastName: STRING
    phoneNumber: Int
    email: STRING
    customerNotes: STRING
    products: [Products]
}

type Product {
    _id: ID
    type: STRING
    make: STRING
    model: STRING
    installDate: STRING
    warrantyDuration: STRING
    cost: STRING
    manual: STRING
    installationNotes: STRING
    installedBy: [Employee]
    service: [Service]
}

type Service {
    type: STRING
    charge: STRING
    serviceDate: STRING
    warrantyDuration:STRING
    serviceNotes: STRING
    product: Product
}

type Parts {
    _id: ID
    name: STRING
    partNumber: STRING
    cost: STRING
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
    login(userName: STRING!, password: STRING!): Auth
    addEmployee(firstName: STRING!, lastName: STRING!, userName: STRING!, password: STRING!, adminStatus: STRING!): Auth
    addCustomer(firstName: STRING!, lastName: STRING!, phoneNumber: INT, email: STRING, customerNote: STRING, products: Product!)
}
`;
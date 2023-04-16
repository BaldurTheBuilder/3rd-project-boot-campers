const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    password: String
    description: String
    skills: [String]
    createdTasks: [Task]
    assignedTasks: [Task]
  }

  type Task {
    _id: ID
    taskAuthor: String
    assignedUser: String
    taskName: String
    description: String
    currentFunding: String
  }

  type Query {
    users: [User]!
  }

  Auth {
    token ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTask(taskName: String!, description: String!): Task
  }
`;

module.exports = typeDefs;

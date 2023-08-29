import { gql } from "graphql-tag";

const typeDefs = gql`

  type SheetList {
    "Sheets Array"
    data: [Sheet]
    "Total Number of Sheets"
    total: Int
  }

  type Query {
    "Hello Query"
    hello: String
    "Get All Sheets"
    getAllSheets: SheetList
  }

"Inputs to create Sheet"
  input SheetInput {
    "Sheet Name"
    name: String
    "Sheet Amount"
    amount: String
    "Sheet Start Date"
    startDate: String
    "Sheet End Date"
    endDate: String
  }

  type Mutation {
    "Create Sheet"
    createSheet(sheet: SheetInput): Sheet
    
    "Update Sheet"
    updateSheet(id: ID!, sheet: SheetInput): Sheet

    "Delete Sheet"
    deleteSheet(id: ID!): String
  }
  
`;

export default typeDefs;
import { gql } from "graphql-tag";

const typeDefs = gql`

  type SheetList {
    data: [Sheet]
    total: Int
  }

  type Query {
    hello: String
    getAllSheets: SheetList
  }

`;

export default typeDefs


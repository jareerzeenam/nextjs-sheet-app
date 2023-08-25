import { gql } from "graphql-tag";

const typeDefs = gql`
    type Query {
      hello: String
      getAllSheets: String
    }
  `;

export default typeDefs


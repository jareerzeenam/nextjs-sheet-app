import { gql } from "graphql-tag";

const typeDefs = gql`

"Date Format ISO"
  scalar ISODate

  type Sheet {
    id: ID
    name: String
    amount: Int
    startDate: ISODate
    endDate: ISODate
  }

`;

export default typeDefs
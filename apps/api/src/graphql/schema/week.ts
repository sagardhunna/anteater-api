export const weekSchema = `#graphql
type WeekData {
    weeks: [Int!]!
    quarters: [String!]!
    display: String!
}

extend type Query {
    week(year: Int, month: Int, day: Int): WeekData!
}
`;

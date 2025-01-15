import apolloServer from 'apollo-server-express';
const { gql } = apolloServer;

const typeDefs = gql`
    type Trick {
        _id: ID
        name: String!
        stance: String!
        difficulty: Int!
        bodyVarial: BodyVarial!
        boardRotation: BoardRotation!
        flip: Flip!
    }
    type BodyVarial {
        _id: ID
        type: String!
        degrees: Int!
    }
    type BoardRotation {
        _id: ID
        type: String!
        degrees: Int!
    }
    type Flip {
        _id: ID
        type: String!
        numberOfFlips: NumberOfFlips!
    }
    type NumberOfFlips {
        _id: ID
        numberType: String!
        number: Int!
    }

    type Query {
        trick(_id: ID!): Trick!
        tricks: [Trick!]!
        boardRotations: [BoardRotation]
        bodyVarials: [BodyVarial]
        flips: [Flip]
        numberOfFlips: [NumberOfFlips]
    }
`;

export default typeDefs;
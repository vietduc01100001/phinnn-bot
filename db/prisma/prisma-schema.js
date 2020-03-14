module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateMovie {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Movie {
  id: ID!
  title: String!
}

type MovieConnection {
  pageInfo: PageInfo!
  edges: [MovieEdge]!
  aggregate: AggregateMovie!
}

input MovieCreateInput {
  id: ID
  title: String!
}

type MovieEdge {
  node: Movie!
  cursor: String!
}

enum MovieOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
}

type MoviePreviousValues {
  id: ID!
  title: String!
}

type MovieSubscriptionPayload {
  mutation: MutationType!
  node: Movie
  updatedFields: [String!]
  previousValues: MoviePreviousValues
}

input MovieSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MovieWhereInput
  AND: [MovieSubscriptionWhereInput!]
}

input MovieUpdateInput {
  title: String
}

input MovieUpdateManyMutationInput {
  title: String
}

input MovieWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [MovieWhereInput!]
}

input MovieWhereUniqueInput {
  id: ID
  title: String
}

type Mutation {
  createMovie(data: MovieCreateInput!): Movie!
  updateMovie(data: MovieUpdateInput!, where: MovieWhereUniqueInput!): Movie
  updateManyMovies(data: MovieUpdateManyMutationInput!, where: MovieWhereInput): BatchPayload!
  upsertMovie(where: MovieWhereUniqueInput!, create: MovieCreateInput!, update: MovieUpdateInput!): Movie!
  deleteMovie(where: MovieWhereUniqueInput!): Movie
  deleteManyMovies(where: MovieWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  movie(where: MovieWhereUniqueInput!): Movie
  movies(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movie]!
  moviesConnection(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieConnection!
  node(id: ID!): Node
}

type Subscription {
  movie(where: MovieSubscriptionWhereInput): MovieSubscriptionPayload
}
`
      }
    
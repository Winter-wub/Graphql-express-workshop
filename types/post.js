module.exports = `
  type Post {
    _id: String!
    title: String!
    content: String!
    comments: [Comment]
    created_at: String!
  }
  type Query {
    Post(id: String!): Post
    Posts: [Post]
  }
  type Mutation {
    addPost(title: String!, content: String!): Post
    editPost(title: String!, content: String!): Post
  }
`;

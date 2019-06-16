module.exports = `
  type Comment {
    _id: String!
    postId: String!
    content: String!
  }
  type Query {
    Comments: [Comment]
    Comment(id: String!): Comment
  }
  type Mutation {
    addComment(post_id: String!, content: String!): Comment
  }
`;

const { mergeResolvers } = require('merge-graphql-schemas');
const post = require('./post');
const comment = require('./comment');
const resolvers = [post, comment];

module.exports = mergeResolvers(resolvers);

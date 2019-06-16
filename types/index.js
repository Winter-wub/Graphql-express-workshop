const { mergeTypes } = require('merge-graphql-schemas');
const Post = require('./post');
const comment = require('./comment');
const typeDefs = [Post, comment];

module.exports = mergeTypes(typeDefs, { all: true });

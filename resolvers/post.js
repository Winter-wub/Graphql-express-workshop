const di = require('../utils/di');
const { ObjectId } = require('mongodb');

module.exports = {
	Query: {
		Post: async (root, args) => {
			const post = di.get('mongo').collection('posts');
			const comment = di.get('mongo').collection('comments');
			const result = await post.findOne({ _id: ObjectId(args.id) });
			const comments = await comment.find({ postId: args.id }).toArray();
			return {
				...result,
				comments,
			};
		},
		Posts: async () => {
			const post = di.get('mongo').collection('posts');
			return await post.find().toArray();
		},
	},
	Mutation: {
		addPost: async (root, args) => {
			const post = di.get('mongo').collection('posts');
			const addData = {
				...args,
				created_at: new Date(),
			};
			const result = await post.insertOne(addData);
			return result.ops[0];
		},
	},
};

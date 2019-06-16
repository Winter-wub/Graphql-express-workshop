const di = require('../utils/di');
const { ObjectId } = require('mongodb');

module.exports = {
	Query: {
		Comments: async () => {
			const comment = di.get('mongo').collection('comments');
			const result = await comment.find().toArray();
			return result;
		},
		Comment: async (root, args) => {
			const comment = di.get('mongo').collection('comments');
			return await comment.findOne({ _id: ObjectId(args.id) });
		},
	},
	Mutation: {
		addComment: async (root, args) => {
			const comment = di.get('mongo').collection('comments');
			const addData = {
				...args,
			};
			return await comment.insertOne(addData).ops[0];
		},
	},
};

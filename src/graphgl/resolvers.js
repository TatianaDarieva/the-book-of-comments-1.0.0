const mongoose = require('mongoose')
const User = require('../models/User');
const generateId = require('../utils/generateId')

module.exports = {
    Query: {
        async userGetAll(_, { amount }){
            return await User.find().sort({createdAt: -1}.limit(amount))
        },
        async userGetById(_, { userId }) {
            return await User.findById(new mongoose.Types.ObjectId(userId))
        },

        async commentGetAll(_, { amount }) {
            return await Comment.find().sort({createdAt: -1}.limit(amount))
        },
        async commentById(_, { commentId }) {
            return await Comment.findById(new mongoose.Types.ObjectId(commentId))
        }
    },
    Mutation: {

    }
}
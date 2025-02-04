const mongoose = require('mongoose')
const { Schema } = require('mongoose')
mongoose.Schema.Types.String.set('trim', true)

const commentSchema = new Schema ({
    _id: mongoose.Schema.Types.ObjectId,

    createdAt: {
        type: String
    },

    rating: {
        type: Int
    },

    title: {
        type: String
    },

    description: {
        type: String
    }
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
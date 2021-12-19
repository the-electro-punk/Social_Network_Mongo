const {Schema, model} = require('mongoose')

// SQL uses connections between tables but Mongo doesn't need connections (aren't key)

const PostSchema = new Schema({
    postTitle: {
        type: String
    },
    createdBy: {
        type: String
    },
    content: {
        type: String
    }
})

const Posts = model('Posts', PostSchema)

module.exports = Posts
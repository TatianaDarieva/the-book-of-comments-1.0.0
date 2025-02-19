const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const typeDefs = require('./graphgl/typeDefs')
const resolvers = require('./graphgl/resolvers')

const MONGODB = 'mongodb://localhost:27017'
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const connectDB = async() => {
    try {
        await mongoose.connect(MONGODB)
        console.log('MongoDB connected successfully');
    } catch (err){
        console.log(err.message);
        process.exit(1)
    }
}

connectDB()

server.listen({port: 5000}).then(({url}) =>  {
    console.log(`🚀 Server ready at ${url}`)
})
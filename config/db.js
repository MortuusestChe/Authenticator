const mongoose = require('mongoose')
const dbConfig = require('./dbconfig')

const connectDB = async() => {
    try {
        const con = await mongoose.connect(dbConfig.database, {
        })
        console.log('MongoDB Connected:'+ con.connection.host)
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB
// const mongoose = require('mongoose')

// const connect = async (DATABASE_URL, DATABASE) => {
//     try {
//         const DATABASE_OPTION = { dbName: DATABASE }
//         await mongoose.connect(DATABASE_URL, DATABASE_OPTION)
//     }
//     catch {

//     }
// }

// module.exports = connect


const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/testing");
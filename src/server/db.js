const mongoose =require('mongoose')

const connect =async (DATABASE_URL,DATABASE)=>{
    try{
        const DATABASE_OPTION = {dbName:DATABASE}
        await mongoose.connect(DATABASE_URL,DATABASE_OPTION)
    }
    catch{
        
    }
}

module.exports = connect
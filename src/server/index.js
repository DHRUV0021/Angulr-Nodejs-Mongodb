const express = require ('express')
const port = 5000
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()

const db = require('./db')
const UserSchema = require('./usershema');


const DATABASE_URL = 'mongodb://localhost:27017'
const DATABASE = 'testing'
db(DATABASE_URL,DATABASE)

// =============Get api data
app.get("/get", async (req, res) => {
    let usershema = await UserSchema.find();
    if (usershema.length > 0) {
        res.send(usershema)
    } else {
        res.send({ result: "no contact data" })
    }
});


// ===server port no
app.listen(port,() => console.log('listening on port '+ port))
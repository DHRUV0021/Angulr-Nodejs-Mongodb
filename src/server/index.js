const express = require ('express')
const port = 5000
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next(); // Important
})

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

app.post('/add', async (req, res) => {
    let usershema = new UserSchema(req.body);
    let result = await usershema.save();
    res.send(result);
});

app.put("/edit/:id",async (req, res)=>{
    let result = await UserSchema.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result);
});

app.delete("/delete/:id", async (req, res) => {
    const result = await UserSchema.deleteOne({ _id: req.params.id })
    res.send(result);
});



// ===server port no
app.listen(port,() => console.log('listening on port '+ port))
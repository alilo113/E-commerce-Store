const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose")
const custumer = require("./module/custumer")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/custumersDataBase")
.then(() => console.log("Database connected"))
.catch((error) => console.log(error))

app.post("/sign-up", async (req, res) => {
    try {
        const {username, password, email} = req.body
        const newCustumer = new custumer({username: username, password: password, email: email})
        console.log(newCustumer)
        const saveCustumer = await newCustumer.save()
    } catch (error) {
        console.log(error)       
    }
})

/**
 {
  username: 'allea',
  password: 'alilou115@',
  email: 'alilou@gmail.com',
  _id: new ObjectId('668f90085cd361e78a883271')
}
 */
app.post("/log-in", async (req, res) => {
    try {
        const {email, password} = req.body
        const custumerExist = await custumer.findOne({email: email, password: password})

        if(custumerExist){
            res.status(200).send("Log in completed")
            console.log('log in completed')
        }else{
            res.status(401).send("log in faild")
        }
    } catch (error) {
        console.log(`Eroor happend during log in, ${error}`)
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

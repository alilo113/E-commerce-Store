const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Custumer = require("./module/custumer");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/custumersDataBase")
.then(() => console.log("Database connected"))
.catch((error) => console.log(error));

app.post("/sign-up", async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const newCustumer = new Custumer({ username, password, email });
        await newCustumer.save();
        const token = newCustumer.generateAuthToken();
        res.status(201).send({ token });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error occurred during sign-up");
    }
});

app.post("/log-in", async (req, res) => {
    try {
        const { email, password } = req.body;
        const custumerExist = await Custumer.findOne({ email });

        if (!custumerExist) {
            return res.status(401).send("Log in failed");
        }

        const isMatch = await bcrypt.compare(password, custumerExist.password);
        if (!isMatch) {
            return res.status(401).send("Log in failed");
        }

        const token = custumerExist.generateAuthToken();
        res.status(200).send({ token });
    } catch (error) {
        console.log(`Error occurred during log in, ${error}`);
        res.status(500).send("Error occurred during log in");
    }
});

app.get("/profile", auth, async (req, res) => {
    try {
        const user = await Custumer.findById(req.user._id).select('-password');
        res.send(user);
    } catch (error) {
        res.status(500).send("Server error");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

/**
{
    ussername: 'allea',
    password: 'alilou115@',
    email: 'alilou@gmail.com',
    _id: new ObjectId('668f90085cd361e78a883271')
}
*/
const express = require("express"); // Fixed typo from "expres" to "express"
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const Customer = require("./module/customer"); // Fixed filename to "customer" for consistency

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/customerdb") // Fixed database name to "customerdb"
    .then(() => console.log("Database connected"))
    .catch((error) => console.log(error));

app.post("/sign-up", async (req, res) => { // Added leading slash to the route
    try {
        const { username, password, email } = req.body;
        const newCustomer = new Customer({ username, password, email });
        console.log(newCustomer);
        await newCustomer.save();
        res.status(201).send({ message: "Customer registered successfully." }); // Send a success response
    } catch (error) {
        console.error("Error:", error); // Log the error
        res.status(500).send({ message: "Internal server error." }); // Send an error response
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ email });
  
    if (customer && await customer.comparePassword(password)) {
      res.send({ username: customer.username }); // Return the username
    } else {
      res.status(401).send({ message: "Invalid credentials" });
    }
});  

app.post("/api/orders", async (req, res) => {
  try {
      const { products, totalPrice } = req.body;
      // Logic to save the order to the database
      // For example, create an Order model and save it
      res.status(201).send({ message: "Order created successfully." });
  } catch (error) {
      console.error("Error:", error);
      res.status(500).send({ message: "Internal server error." });
  }
});

app.listen(port, () => console.log(`This app listens on port ${port}`)); // Fixed the log message


/**
 {
  username: 'alilou',
  password: 'alilou115@',
  email: 'alilou@gmail.com',
  _id: new ObjectId('669155566589552d29fd30f7')
}
 */
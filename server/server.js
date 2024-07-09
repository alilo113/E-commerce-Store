const express = require("express");
const app = express();
const port = 3000;

// Serve static files like favicon.ico from the "public" directory
app.use(express.static("public"));

app.get("/api", (req, res) => {
    res.json({message: "this is from the backend"});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

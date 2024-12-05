const express = require('express');

const app = express(); // creating new server

// app.use("/", (req,res) => {
//     res.send("Hello, it's me. Hello from the server side.");
// });
app.use("/test", (req,res) => {
    res.send("Sawadee krab to test page");
});
app.use("/hello", (req,res) => {
    res.send("namaskara");
});

app.listen(3000, () => {
    console.log("server listening on port 3000");
});

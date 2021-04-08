const express = require('express');

const app = express();

app.listen(process.env.PORT,()=> {
    console.log("Server is up and running");
});

app.get("/",(req,res) => {
    res.send("Hello Browser")
});

const http = require("http");
const express = require("express");
const app = express(http);
const fs = require("fs");
app.listen(80);


app.get("/",(req,res)=>{
    res.send(fs.readFileSync("./index.html","utf8"));
});


app.get("/script.js",(req,res)=>{
    res.send(fs.readFileSync("./script.js","utf8"));
});








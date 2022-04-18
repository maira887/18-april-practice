const express =  require("express");
const app = express()
const path = require("path");
const bodyParser = require("body-parser")
const PORT = 3000



// File System
const fs = require("fs")

// DB Path
const db = "./Public/db/data.json"

// middlewares
app.use(bodyParser.json())


app.get("/filter/:pass", (req, res) => {
    let data = JSON.parse(fs.readFileSync(db, "utf-8"))    
    pass = req.params.pass
        
    fildata = data.filter(passwd => {
       if (passwd.pass == pass)
            return passwd.name
        })
        console.log(fildata);
    
    res.json(typeof fildata !== 'undefined' ? fildata : "User not found")
    
}),
app.get("/name:/pass", (req, res) => {
    let data = JSON.parse(fs.readFileSync(db, "utf-8"))    
    pass = req.params.pass
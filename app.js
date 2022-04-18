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
    
})

app.get('/name:/pass', (req, res) => {
  data.forEach((user, i) => {
    if (user.name == req.params.name){
        updatedData = [user, i]
        return true
    } 
})

// validating user found or not
if(updatedData.length > 0){

    console.log("updatedData");
    console.log(updatedData);
    

    // now updating user name if required
    if(typeof req.query.n !== "undefined"){
        data[updatedData[1]].name = req.query.n
    }
    
    // now updating user password if required
    if(typeof req.query.p !== "undefined"){
        data[updatedData[1]].pass = req.query.p
    }

    fs.writeFileSync(db, JSON.stringify(data));

}

res.json(updatedData.length > 0 ? {msg: "Data updated", data: updatedData[0] } : "User not found")
})
    
  // let data = JSON.parse(fs.readFileSync(db, "utf-8"))    
  //   pass = req.params.pass
        
  //   fildata = data.filter(passwd => {
  //      if (passwd.pass == pass)
  //           return passwd.name
  //       })
  //       console.log(fildata);
    
  //   res.json(typeof fildata !== 'undefined' ? fildata : "User not found")
  // })

  let username= { 
    "name":'Maha',
    "pass": 3452 }
  
  app.post('/update/:users', (req, res) => {
    let data = JSON.parse(fs.readFileSync(db, "utf-8"))    
    const name = req.query.name;
    
    
      if (req.query !== username) {
        console.log('User not Exist'); }
        else{
          data.push(username)
          res.json('user Added')
          
        //   (Object.hasOwnProperty.call(name, "Hasan"))
        //   res.json(typeof fildata !== 'undefined' ? fildata : "User not found")
          
      }

  })


app.listen(PORT, () => {
    console.log("Server is running at port: " + PORT);
})
const express = require('express');// as a function 
require("./db/connection");
const User = require("./models/user")

const app = express();// to use it's functionality

const port =  process.env.PORT || 8000;


app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello from the Server Side");

})

// creating a account and savings it
app.post('/user',(req,res)=>{
    const user = new User(req.body);
    // let bal = req.body.balance;
    // bal = bal + 500;
    // console.log(bal);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
    
    // res.send("Hello from the Server Side");

})


// deposit 

app.post('/deposit',(req,res)=>{
    const user = new User(req.body);
    let bal = req.body.balance;
    bal = bal + 500;
    // console.log(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
    
    // res.send("Hello from the Server Side");

})

app.post('/withdrawl',(req,res)=>{
    const user = new User(req.body);
    let bal = req.body.balance;
    bal = bal - 500;
    // console.log(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
    
    // res.send("Hello from the Server Side");

})



app.listen(port,()=>{
    console.log(`connections is set up at ${port}`);
})



const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/BankUsers").then(()=>{
    console.log("connections is successful");
}).catch((e)=>{
    console.log("No connection");
})


//first step is to import the express library by require
const express = require("express");

//create an app variable by calling express as a function
//this app allows us to setup our entire server
const app = express();

//mostly we send status and json data
//else
//rarely we use rendering a flie (dynamic html)

//setting up a view engine
app.set('view engine', 'ejs');

//easiest way to setup routes
app.post("/",(req,res) => {
    
    console.log("iniside root get route !")
    console.log("req --> ",req)

    //sending text
    // res.send("This is / route")

    //sending staus and json response
    // res.status(400).json({msg:"this is abcd error"})

    //sending default 200(OK) status and json response
    // res.json({msg:"this is jndjfnn error"})

    //sending a file for user to download
    // res.download("package.json")

    //rendering a file
    res.render("index", { textkmd: "Shubham" })
})


//to make our server run
app.listen(3003,()=>{
    console.log("This app is listening on port ",3005);
    console.log("process.env",process.env);
})



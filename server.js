//first step is to import the express framework by require
const express = require("express");

//create an app variable by calling express as a function
//this app allows us to setup our entire server
const app = express();

//mostly we send status and json data
//else
//rarely we use rendering a flie (dynamic html)

//easiest way to setup routes
app.get("/",(req,res) => {
    
    console.log("iniside root get route !")
    //sending text
    // res.send("This is / route")

    //sending staus and json response
    res.status(400).json({msg:"this is abcd error came"})

    //sending default 200(OK) status and json response
    // res.json({msg:"this is jndjfnn error"})

    //sending a file for user to download
    // res.download("package.json")
})

//to get json data passed by client with post/put/patch requests
app.use(express.json());

app.use("/blogs", require("./routes/blogs"))
app.use("/users", require("./routes/users"))

//to make our server run
app.listen(3010,()=>{
    console.log("This app is listening on port ",3010);
})



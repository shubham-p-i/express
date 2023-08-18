const express = require("express");
const router = express.Router();
const runQuery = require("../database")
const { getCredentials } = require("../middleware/getCredentials")

router.get("/",async (req, res)=>{

    const getAllRes = await runQuery.query(`SELECT * FROM express.users`);
    
    res.json(getAllRes.rows);
})

router.post("/", getCredentials, async (req, res)=>{

    const { firstname, lastname, email, password } = req.body; 

    console.log("User details from middleware --> ",req.userDetails)

    try{
        const insertRes = await runQuery.query(`INSERT INTO express.users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *;`,
        [firstname, lastname, email, password]);

        res.json({success: true, message:"You are signed up successfull !" ,result:insertRes.rows});
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error});
    }
    
})

module.exports = router


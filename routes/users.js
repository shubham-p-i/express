const express = require("express");
const router = express.Router();
const runQuery = require("../database")

router.get("/",async (req, res)=>{

    const getAllRes = await runQuery.query(`SELECT * FROM express.users`);
    
    res.json(getAllRes.rows);
})

router.post("/newuser",async (req, res)=>{

    const { firstname, lastname, email, password } = req.body; 

    const insertRes = await runQuery.query(`INSERT INTO express.users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [firstname, lastname, email, password]);
    
    res.json(insertRes.rows);
})

module.exports = router


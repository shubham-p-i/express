const express = require("express");
const router = express.Router();
const runQuery = require("../database")

router.get("/",async (req, res)=>{

    const getAll = await runQuery.query(`SELECT * FROM express.blogs`);

    res.json(getAll.rows);
})

router.post("/newblog/:author",async (req, res)=>{
    
    const users = await runQuery.query(`SELECT id FROM express.users WHERE firstname = $1`,[req.params.author])

    const author = users.rows[1].id;

    console.log("author --> ",users.rows[1].id)

    const { title, content } = req.body;

    const insertRes = await runQuery.query(`INSERT INTO express.blogs (title, content, author) VALUES ($1, $2, $3) RETURNING *;`,[title, content, author])

    res.json(insertRes.rows[0]);
})

module.exports = router


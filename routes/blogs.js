const express = require("express");
const router = express.Router();
const runQuery = require("../database")

router.get("/",async (req, res)=>{

    const getAll = await runQuery.query(`SELECT * FROM express.blogs`);

    res.json(getAll.rows);
})

router.post("/:author",async (req, res)=>{
    
    const users = await runQuery.query(`SELECT id FROM express.users WHERE firstname = $1`,[req.params.author])

    console.log("author --> ",users.rows[0].id)
    
    const author = users.rows[0].id;

    const { title, content } = req.body;

    const insertRes = await runQuery.query(`INSERT INTO express.blogs (title, content, author) VALUES ($1, $2, $3) RETURNING *;`,[title, content, author])

    res.json(insertRes.rows[0]);
})

//this is a type of middleware
router.param("author", (req, res, next, author)=>{
    console.log("author inside middleware --> ",author);
    console.log("URL in param middleware --> ",req.originalUrl)
    next();
})

module.exports = router


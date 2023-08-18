const runQuery = require("../database");

const getCredentials = async (req, res, next) => {

        const userEmail = req.body.email;

        const getUser = await runQuery.query(`SELECT * FROM express.users WHERE email = $1`,[userEmail])

        if(getUser.rows.length > 0){
            return res.status(400).json({success: false, message:"User with this email already exist please enter different email !"});
        }
        else{   
            req.userDetails = getUser.rows[0];
            next();
        }

}

module.exports = {getCredentials}
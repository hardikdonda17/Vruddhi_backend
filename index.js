const express = require("express");
let cors = require('cors')
const app = express();
const connection = require("./connection");

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}));

require("./src/pregnant_women/route")(app);

app.post("/login", (req, res)=>{
    console.log("login api called");
    let data = req.body;
    const sql = `SELECT * FROM user WHERE username = '${data.username}' AND password = '${data.password}'`;
    connection.query(sql, (error, results, fields) => {
        if (results.length == 1) {
            res.send({ StatusCode: "200", msg: "Login successfully!", username: results[0].username })
        } else {
            res.send({ StatusCode: "404", msg: "Password or Username is wrong" })
        }
    });
})

app.listen(8080,()=>{
    console.log("app listing on port 8080");
});
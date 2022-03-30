const express = require("express");
const router = express.Router();
// const chirpsStore = require("../chirpstore.js");
// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.
const mySql = require("mysql");

// REST API
const connection = mySql.createConnection({
    host: "localhost",
    user: "chirprapp",
    password: "Secr3t2Every1",
    database: "chirpr"
});

// connection test
// connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + connection.threadId);
//   });


router.get("/:id?", (req, res) => {
    const id = req.params.id;

    if (id) {
        connection.query("SELECT * FROM chirps WHERE id = " + id, (err, results, fields) => {
            if(err) {
                console.log(err);
                res.sendStatus(500);}
            else {
                res.json(results);
            }
        });
    } else {
        connection.query("SELECT * FROM chirps", (err, results, fields) => {
            if(err) {
                console.log(err)
                res.sendStatus(500);}
            else {
                res.json(results);
            }
        });
    }
});

// Create
router.post("/", (req, res) => {
    const body = req.body;

    // chirpsStore.CreateChirp(body);
    res.sendStatus(200);
});

// Delete
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    // chirpsStore.DeleteChirp(id);
    res.sendStatus(200);
});

// Update
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;

    // chirpsStore.UpdateChirp(id, body);
    res.sendStatus(200);
});

module.exports = router;
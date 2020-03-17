const express = require('express');
const router = express.Router();
const controller = require('../controllers/ArtistController.js')
const lcontroller = require("../controllers/LoginController.js")





router.get("/home", (req, res) => {
    controller.getAllData(req,res);

})

// called when request is made to add a new artist
router.post("/new", (req, res) => {
    controller.addNewArtist(req,res);
})

//called when a request is made to delete an artist
router.get("/delete", (req, res) => {
    controller.deleteAnArtist(req, res);
})


router.get("/search", (req,res) => {
    controller.search(req,res)
})


router.get("/login", (req,res) => {
    lcontroller.login(req,res)
})


module.exports = router;


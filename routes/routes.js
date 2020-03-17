const express = require('express');
const router = express.Router();
const controller = require('../controllers/ArtistController.js')
const lcontroller = require("../controllers/LoginController.js")





router.get("https://comp-4711-lab6.herokuapp.com/home", (req, res) => {
    controller.getAllData(req,res);

})

// called when request is made to add a new artist
router.post("https://comp-4711-lab6.herokuapp.com/new", (req, res) => {
    controller.addNewArtist(req,res);
})

//called when a request is made to delete an artist
router.get("https://comp-4711-lab6.herokuapp.com/delete", (req, res) => {
    controller.deleteAnArtist(req, res);
})


router.get("https://comp-4711-lab6.herokuapp.com/search", (req,res) => {
    controller.search(req,res)
})


router.get("https://comp-4711-lab6.herokuapp.com/login", (req,res) => {
    lcontroller.login(req,res)
})


module.exports = router;


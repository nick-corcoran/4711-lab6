const DB = require('../models/Artists.js')
async function getAllData(req, res) {
    var data = await DB.getAllArtists();
    res.render('artist', { "artist": data[0] })

}
async function addNewArtist(req, res) {
    var data = req.body
    await DB.addArtist(data.Name, data.About, data.Image)
    res.redirect("/home")
}


async function deleteAnArtist(req, res) {
    console.log("controler-start")
    var data = req.query.ID
    console.log(req.query.ID)
    var newData = await DB.deleteArtist(data)
    res.redirect("/home")
}

async function search(req, res) {
    var newData = await DB.search(req.query.search)
    res.render('artist', { 'artist': newData })
}

module.exports = {
    getAllData: getAllData,
    addNewArtist: addNewArtist,
    deleteAnArtist: deleteAnArtist,
    search: search,
}
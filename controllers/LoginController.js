
const DB = require('../models/Artists.js')
async function login(req, res) {

    if (req.query.username == null || req.query.password == null) {
        console.log("null boy")
        res.redirect("/login")
    }
    else {
        var bool = await DB.loginCheck(req.query.username, req.query.password)
        console.log("guhguh")
        if (bool) {
            res.redirect("/home")
        }
        else {
            res.render("login", {layout:"login-layout",loginFail:true})
        }
    }
}

module.exports = {
    login: login
}
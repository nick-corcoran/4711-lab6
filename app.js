var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
const Routes = require("./routes/routes.js")
app.use(express.static(path.join(__dirname, './views')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Routes);



const expressHbs = require('express-handlebars');
app.engine(
    'hbs',
    expressHbs({
        layoutsDir: 'views/layouts/',
        defaultLayout: 'main-layout',
        extname: 'hbs'
    })
);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.listen(process.env.PORT || 3000);


app.get("https://comp-4711-lab6.herokuapp.com/", (req, res) => {
    // controller.getAllData(req,res);
    // res.sendFile(path.join(__dirname, '../views', 'login.html'))
    res.render('login', {layout:'login-layout'});
})



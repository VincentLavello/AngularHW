// bring in middleware and express
let express   = require('express'), // our framework
    parser    = require('body-parser'), // parses body
    path      = require('path'); // fixes file paths

// create app instance
let app = express();

// load up parser.json to read json posts in req.body
app.use(parser.json())
   .use(parser.urlencoded({ extended: true }))
   .use(express.static( __dirname + '/client/dist/client'));


require('./server/config/database.js'); // connects database and loads models
require('./server/config/routes.js')(app); // runs the routes function, passes app to routes


// app.listen
app.listen(8000, function(){
    console.log("Running 8000 yadda yadda")
})
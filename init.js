var express= require('express');
var app = express();

// Set the public directory
app.use(express.static(__dirname + '/public'));

//Include all controllers here

require("./app/controller/api.js")(app);
require("./app/controller/webpage.js")(app);

//Activate app
app.listen(8080);
console.log('Listening on port 8080');
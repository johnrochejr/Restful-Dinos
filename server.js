const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();

app.engine('mst', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mst');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));

// Creating a route for my website

//express
//mustache
//body-parser

const express = require('express');
// const mustacheExpress = require('mustache-express');
// const bodyParser = require('body-parser');

const app = express();

// app.engine('mst', mustacheExpress());
// app.set('views', './views');
// app.set('view engine', 'mst');

// app.use(express.static('public'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
  res.send('Hi whats up!?');
});

// Create an endpoint for my API
app.get('/api/dinosaurs', (req, res) => {
  const myDino = [
    {
    id: 1,
    name: 'Susan',
    color: ['green', 'gray'],
    size: '2 tons',
    habitats: ['swamp', 'mountains']
  },
  {
    id: 2,
    name: 'Tony',
    color: ['red', 'gray'],
    size: '3 tons',
    habitats: ['mountains', 'forests']
  },
  {
    id: 3,
    name: 'Mia',
    color: ['green', 'purple'],
    size: '1 ton',
    habitats: ['ponds', 'rivers']
  },
  {
    id: 4,
    name: 'Elise',
    color: ['black', 'yellow'],
    size: '3 tons',
    habitats: ['plains', 'rocks']
  }
];
  // this is how we return JSON from an endppoint
  res.json(myDino);
});

app.listen(3000, () => {
  console.log('Dinos from year 3000');
});

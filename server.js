const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
  res.send('Hi whats up!?');
});

const myDinos = [
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

app.get('/api/dinosaurs', (req, res) => {
  res.json(myDinos);
});

app.get('/api/dinosaurs:id', (req, res) => {
  const dinoId = parseInt(req.params.id);
  const dinos = myDinos.find(singleDino =>
    singleDino.id === dinoId);
  res.json(dinos);
});

app.listen(3000, () => {
  console.log('Dinos from year 3000');
});

const express = require('express');
const middleware = require('./middleware/middleware');
const PORT = 3000;


const app = express();


app.get('/', (req, res) => res.render('home.ejs'));
app.get('/services', (req, res) => res.render('ourServices.ejs'));
app.get('/contact', (req, res) => res.render('contactUs.ejs'));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
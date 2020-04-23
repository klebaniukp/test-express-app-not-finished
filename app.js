const express = require('express');
const app = express();
const port = 8000;
const routes = require('./routes/wiki');

app.use(express.static('public'));
app.use('/login', routes);

app.get('/', (req, res) => {
   res.render("index.ejs")
});
app.get('/login', (req, res) => {
   res.render('login.ejs');
});
app.get('/register', (req, res) => {
   res.render('register.ejs');
});
app.get('/blog', (req, res) => {
   res.render('blog.ejs');
});

// app.set(__dirname,'/views');
app.set('view engine', 'ejs');

app.listen(port, () => {
   console.log(`Listening on port ${port}`)
});


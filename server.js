const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = ('./controllers');
const sequelize = require('./config/connection');
const sequelizeSession = require('connect-session-sequelize')(session.Store);

const app = express();
const port = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const  sess =
{
    secret: process.env.SECRET, 
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new sequelizeSession({db:sequelize})
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
sequelize.sync().then(()=> {

    app.listen(port, ()=> console.log(`listening on port ${port}`))

})





const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = ('./controllers');
const sequelize = require('./config/connection');
const sequelizeSession = require('connect-session-sequelize')(sessions.Store);

const app = express();
const port = process.env.PORT || 3001;

const  sess =
{
    secret: process.env.SECRET, 
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new sequelizeSession({db:sequelize})
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(routes);
sequelize.sync().then(()=> {

    app.listen(port, ()=> console.log(`listening on port ${port}`))

})





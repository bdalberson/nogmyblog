const path = require('path');
const express = require('express');
const sessions = require('express-session');
const exphbs = require('express-handlebars');
const route = ('./controllers');
const sequelize = require('./config/connection');
const sequelizeSession = require('connect-session-sequelize')(sessions.Store);

const app = express()





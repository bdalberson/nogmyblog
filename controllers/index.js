const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./api/homeRoute');
const blogpostRoute = require('./api/blogpostRoute')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
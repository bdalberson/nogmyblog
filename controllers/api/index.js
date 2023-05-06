const router = require('express').Router();
const userRoutes = require('./userRoute');
const blogRoutes = require('./blogpostRoute');


router.use('/users', userRoutes);
router.use('/blog', blogRoutes);

module.exports = router;

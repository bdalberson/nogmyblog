const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//get all users
router.get('/', async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error retrieving users from database');
    }
  });

  //create a user
router.post('/',(req, res) => {

    const user =  User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
}).then((user) => {
    res.json(user);
  })
  .catch((err) => {
    res.json(err);
  });
}
);

//update a user
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    
    try {
      const user = await User.findByPk(id);
      
      if (!user) {
        return res.status(404).send('User not found');
      }
      
      user.session.email = email;
      user.session.password = password;
      
      await user.session.save();
      
      res.send('User updated successfully');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error updating user in database');
    }
  });

  

module.exports = router;

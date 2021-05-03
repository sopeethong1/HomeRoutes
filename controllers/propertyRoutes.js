const router = require('express').Router();
const { Property, User } = require('../models');
const withAuth = require('../utils/auth');

//property_dashboard route--displays all properties
//get all properties
router.get('/', async (req, res) => {
  const propertyData = await Property.findAll({
    include: [
      {
        model: User,
        attributes: ['id'],
      },
    ],
  });
  const properties = propertyData.map((properties) =>
    properties.get({ plain: true })
  );
  res.render('property_dashboard', { properties });
});


// render add property page
router.get('/update', (req, res) => {
  res.render('add_property');
});


// route to view a single property on display_property
router.get('/:id', async (req, res) => {
  try {
    const propertyData = await Property.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['id'],
        },
      ],
    });

    const property = propertyData.get({ plain: true });
    res.render('display_property', {
      property,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json(err);
  }
});

router.get('/property', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Property }],
    });

    const user = userData.get({ plain: true });

    res.render('property', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

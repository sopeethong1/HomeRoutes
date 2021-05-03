const router = require('express').Router();
const { Property, User } = require('../models');




// GET all properties for property dashboard
router.get('/', async (req, res) => {
  try {
    const propertyData = await Property.findAll({
      include: [
        {
          model: User,
          attributes: ['id'],
        },
      ],
    });

    const properties = propertyData.map((property) =>
      property.get({ plain: true })
    );
    
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      properties,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

// GET all properties for property dashboard
// router.get('/', async (req, res) => {
//   try {
//     const propertyData = await Property.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['id'],
//         },
//       ],
//     });

//     const properties = propertyData.map((property) =>
//       property.get({ plain: true })
//     );
//     // Send over the 'loggedIn' session variable to the 'homepage' template
//     res.render('property_dashboard', {
//       properties,
//       // loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one property
// router.get('/property/:id', async (req, res) => {
//   try {
//     const propertyData = await Property.findByPk(req.params.id, {
//       include: [
//         {
//           model: Property,
//           attributes: [
//             'id',
//             'address',
//             'leaseStart',
//             'leaseEnd',
//             'squareFootage',
//             'propertyType',
//             'landlord_id'
//           ],
//         },
//       ],
//     });

//     const property = propertyData.get({ plain: true });
//     // Send over the 'loggedIn' session variable to the 'property' template
//     res.render('display_property', { property, /*loggedIn: req.session.loggedIn*/ });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });




module.exports = router;
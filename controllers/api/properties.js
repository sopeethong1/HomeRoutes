const router = require('express').Router();
const { Property } = require('../../models');
// const withAuth = require('../../utils/auth');

// route to get all properties

// router.get('/', async (req, res) => {
//     const propertyData = await Property.findAll().catch((err) => { 
//         res.json(err);
//       });
//         const properties = propertyData.map((property) => property.get({ plain: true }));
//         res.render('all', { properties });
//       });

//       //route to get one property
//       router.get('/:id', async (req, res) => {
//         try{ 
//             const propertyData = await Property.findByPk(req.params.id);
//             if(!propertyData) {
//                 res.status(404).json({message: 'No Property with this id!'});
//                 return;
//             }
//             const property = propertyData.get({ plain: true });
//             res.render('properties', property);
//           } catch (err) {
//               res.status(500).json(err);
//           };     
//       });
    
//       const router = require('express').Router();
// const { Property } = require('../../models');

// route to create a new property

router.post('/',  (req, res) => {
  console.log(req.body);
  Property.create(
  {
    address: req.body.address,
    leaseStart: req.body.leaseStart,
    leaseEnd: req.body.leaseEnd,
    squareFootage: req.body.squareFootage,
    propertyType: req.body.propertyType,
  },
)
  .then((newProperty) => {
    // Sends the updated book as a json response
    res.json(newProperty);
    // res.render('add_property', { property });
  })
  .catch((err) => {
    console.log(err);
    res.json(err)
  });
  
});
  
  
//   ({req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newProperty);
//   } catch (err) {
//     res.status(400).json(err);
//     res.render('add_property', { property });
//   }
// });

//route to delete a property by id
router.delete('/:id', async (req, res) => {
    try {
      const propertyData = await Property.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!propertyData) {
        res.status(404).json({ message: 'No property found with this id!' });
        return;
      }
  
      res.status(200).json(propertyData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

    module.exports = router;
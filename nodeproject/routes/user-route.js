const express = require("express");
// helping for routing.
const router = express.Router();
//for validation
const userController = require('../controllers/user-controller')
const { body, check } = require('express-validator');
const userModel = require('../Models/userModel')
router.get("/all", userController.allUser);

router.post("/creates",
  [// username must be an email
    body('email')
      .not()
      .isEmpty().withMessage('email is empty budy')
      .normalizeEmail()
      .isEmail(),
    // password must be at least 5 chars long
    body('username')
      .not()
      .isEmpty()
      .isLength({ min: 4 })]

  , userController.createrUser
);


// register post .............
router.post('/register',
  [// username must be an email
    body('email')
      .not()
      .isEmpty().withMessage('email is empty ')
      .normalizeEmail()
      .isEmail()
      .custom(async (value) => {
        let user = await userModel.findOne({
            email: value
        })
        if (user) {
            return Promise.reject('E-mail already in use');
        }
      }).withMessage('E-mail already in use'),



    //userName 
    body('username').not().isEmpty().withMessage('username is empty'),



    // password must be at least 5 chars long
    body('password')
      .not().isEmpty().withMessage('password is empty ')
      .isLength
      ({
        min: 4,
      }),


    body('repassword').custom((value, {
      req
    }) => {
      if (value !== req.body.password) {
        throw new Error('Password does not matched.');
      }

      return true;
    })

  ],userController.registerUser
);


// login 
router.post('/login',
    [
        body('email')
        .normalizeEmail()
        .notEmpty().withMessage('email is empty')
        .isEmail().withMessage('not of email type')
        .custom(async (value) => {
            let user = await userModel.findOne({
                email: value
            })
            if (!user) {
                return Promise.reject('there is no user found');
            }
        }).withMessage('there is no user found'),

        body('password')
        .not().isEmpty().withMessage('password is required')
        .isLength({
            min: 4,
        }).withMessage('min length 4'),
    ],
    userController.loginUser
);




// router.get("/get/:email", (req, res) => {
//   res.json("user email get!");
// });

router.get("/get/:email", userController.getUser);

router.post("/update/:id", (req, res) => {
  res.json("Hello World!");
});

router.get("/delete/:id", userController.deleteUserByemail);

module.exports = router;

// today work 1/2/22
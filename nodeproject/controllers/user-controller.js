const { body, validationResult } = require('express-validator');
const userModel = require("../Models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ObjectId = require('mongoose').Types.ObjectId;

let user = [{
    email: "user1@sm.com",
    username: "user1",

},
{
    email: "user2@so.com",
    username: "user2",

},
{
    email: "user3@so.com",
    username: "user3",

},
{
    email: "user4@so.com",
    username: "user4",

}
];

// mongooges use  in allUser
async function allUser(req, res, next) {
    let dbusers = await userModel.find().exec();
    res.json(dbusers).status(200);
}

// register logic 
async function registerUser(req, res, next) {
    const errors = validationResult(req);
    console.log(errors.errors);
    if (errors.errors.length) {
        return res.status(422).json({
            errors: errors.array()
        });

    } else {

    }
    const {
        email,
        username,
        password } = req.body;

    let hashPassword = await bcrypt.hash(password, 10)

    let newUser = await new userModel({
        email,
        username,
        password: hashPassword,
        role: "user",
    }).save();

    return res.status(201).json(newUser);
};


// createrUser function logic 
async function createrUser(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const {
        email,
        username,
        password } = req.body;

    let newUser = new userModel({
        email,
        username,
        password
    })
    await newUser.save();


    return res.status(201).json(
        newUser
    );
};


// login user function logic
async function loginUser(req, res, next) {
    // console.log(req.body.email);
    // console.log(req.params.id);
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;

    //let result = user.find(u => u.email === email);
    let user = await userModel.findOne({
        email,
    }).exec();
    if (user) {
        //console.log(user);
        let chekPass = await bcrypt.compare(password, user.password);
        if (chekPass) {
            const {
                email,
                username,
                phone,
                role,
                _id,
            } = user;
            // jwt part token
            let token = await jwt.sign({
                email,
                username,
                _id
            }, 'do_not_share');

            return res.status(200).json({
                email,
                username,
                role,
                phone,
                token
            });
        }

        else {
            let errors = {
                errors: [{
                    param: 'password',
                    msg: 'password incorrect'
                }],
                msg: 'validation error'
            };

            return res.status(422).json(errors);
        }
    }

    else {
        return res.json("User not log in").status(400);

    }
}



async function getUser(req, res, next) {
    id = req.params.id;
    let user = await userModel.findById(id)
    // email = req.params.email;
    //let result = user.find(u => u.email === email);
    return res.json(user).status(200);
}



// delete user
function deleteUserByemail(req, res, next) {
    email = req.params.email;
    let index = user.findIndex(u => u.email === email);
    user.splice(index, 1)
    return res.json(user).status(200);
}
// make admin 
async function makeAdmin(req, res) {
    const id = req.params.id
    const toAdmin = { _id: ObjectId(id) };
    const result = await userModel.updateOne(toAdmin, { $set: { roll: "kawser" } });
    return res.status(200).json({ status: "make Admin succcesfully done", result });

}

//update



// exporting 
exports.createrUser = createrUser;

exports.registerUser = registerUser;
exports.loginUser = loginUser;

exports.allUser = allUser;
exports.getUser = getUser;
exports.deleteUserByemail = deleteUserByemail;

exports.makeAdmin = makeAdmin;
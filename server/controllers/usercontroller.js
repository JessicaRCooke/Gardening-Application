const express = require('express');
const router = express.Router();
const sequelize = require('../db')
const User =sequelize.import('../models/user');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/signup', function (req, res) {
    var username = req.body.user.username;
    var password = req.body.user.password;

    User.create({
        username: username,
        password: bcrypt.hashSync(password, 10)
    })
.then(
    createSuccess = (user) => {
        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: 60*60*24
        })
        res.json({
            user: user,
            message: 'user created',
            sessionToken: token
        })
    },
    createError = err => res.send(500, err)
)
});

router.post('/signin', function(req,res) {

    User.findOne( {where: { username: req.body.user.username }})
    .then(function(user) {

        if(user) {

            bcrypt.compare(req.body.user.password, user.password, function (err, matches){ 

                if (matches) {

                    var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24 });
                    res.json({
                        user: user,
                        message: "successfully authenticated",
                        sessionToken: token
                    });
                }else{
                    res.status(502).send({ error: "error"});
                }
                console.log("the value matches:", matches)
            })
        } else {
            res.status(500).send({ error: "failed to authenitcate"});
        }
     },
      function (err) {
          res.status(501).send({ error: "error" });
      }
    );
});

module.exports = router;
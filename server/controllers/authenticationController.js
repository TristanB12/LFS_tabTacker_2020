const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

function jwtSignUser(user) {
    const SECRET_STRING = 'mysecretstring'
    const ONE_DAY = 60 * 60 * 24

    return jwt.sign(
        {userId: user},
        SECRET_STRING,
        {expiresIn: ONE_DAY})
}

module.exports = {
    login(req, res) {
        User.findOne({email : req.body.email})
            .then(user => {
                if(!user) {
                    return res.status(400).json({
                        message: 'Adress mail not found'
                    })
                }
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if(valid) {
                            return res.status(200).json({
                                user: user,
                                token: jwtSignUser(user._id),
                                message: 'Connected'
                            })
                        }
                        else {
                            return res.status(400).json({
                                message: 'wrong password'
                            })
                        }
                    })
            })
            .catch(error => res.status(400).json({error}))
    },
    register(req, res) {
        bcrypt.hash(req.body.password, 10)
            .then(hashedPassword => {
                const user = new User({
                    email: req.body.email,
                    password: hashedPassword
                })
                user.save()
                    .then(user => res.status(200).json({
                        user: user,
                        message: 'Your account has been created'
                    }))
                    .catch(error => res.status(400).json({
                        error: error,
                        message: 'Adress mail already used'
                    }))
            })
            .catch(error => res.status(500).json({error, message: 'failed to hash'}))
    }
}

        /* USE THIS TO DROP USER DATABASE
        User.remove({}, function(err) {
            console.log('collection removed')
        });*/
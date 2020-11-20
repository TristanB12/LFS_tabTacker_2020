const User = require('../models/User')

exports.validUserAuth = (req, res) => {
    User.findOne({email : req.body.email})
        .then(user => {
            if(!user)
                return res.status(400).json({
                    message: 'Adress mail not found'
                })
            if(user.password === req.body.password)
                return res.status(200).json({
                    message: 'Connected'
                })
            else {
                return res.status(400).json({
                    message: 'wrong password'
                })
            }
        })
        .catch(error => res.status(400).json({error}))
}
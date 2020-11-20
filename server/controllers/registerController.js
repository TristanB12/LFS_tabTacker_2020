const User = require('../models/User')

exports.register = (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
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
}

/* USE THIS TO DROP USER DATABASE
User.remove({}, function(err) {
    console.log('collection removed')
});*/
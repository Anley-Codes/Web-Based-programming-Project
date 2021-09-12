const mongoose = require('mongoose');
const infopage  = mongoose.model('infopage');

module.exports.register = (req, res, next) => {
    var user = new Infopage();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.phoneNumber = req.body.phoneNumber;
    user.campus = req.body.campus;
    user.workShop = req.body.workShop;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else
            console.log(err);
    });
}
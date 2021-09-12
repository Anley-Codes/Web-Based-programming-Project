
const mongoose = require('mongoose');

var inputValues = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    campus: {
        type: String
       
    },
    workShop: {
        type: String
    }
});
//Validating email
inputValues.path('email').validate((val) => {
    emailRegex = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');


mongoose.model('infopage', inputValues); 





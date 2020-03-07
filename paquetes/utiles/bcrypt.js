const bcrypt = require('bcryptjs');

const password = '1234Segura!';

bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);

    bcrypt.compare(password, hash, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });
})
let bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('1234', salt);
console.log(hash);
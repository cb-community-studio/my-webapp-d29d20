const users = require("./users/users.service.js");
const userDetails = require("./userDetails/userDetails.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(userDetails);
    // ~cb-add-configure-service-name~
};

const routes = require('./routes');

module.exports = function (app, db) {
  routes(app, db);
  //include other routes later
}
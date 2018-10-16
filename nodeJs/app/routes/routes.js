module.exports = function (app, db) {
  //POST ROUTE
  app.postMessage('/items', (req, res) => {
    res.send('Hello World')
  });
};
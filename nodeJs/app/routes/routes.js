module.exports = function (app, db) {
  //POST ROUTE
  app.post('/items', (req, res) => {
    console.log(req.body);
    res.send('Hello World')
  });
};
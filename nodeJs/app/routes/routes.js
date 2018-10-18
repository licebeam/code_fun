module.exports = function (app, db) {
  //POST ROUTE
    app.post('/items', (req, res) => {
      const item = { text: req.body.body, title: req.body.title };
      db.collection('items').insert(item, (err, result) => {
        if (err) {
          res.send({ 'error': 'error has occurred' });
        } else { 
          res.send(result.ops[0]);
        }
      })
    console.log(req.body);
    res.send('Hello World')
  });
};
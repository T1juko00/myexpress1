var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('moikka');
  console.log("heipä hei")
});

router.get('/toka', function(req, res, next) {
    res.send('terveppä');
    console.log("terve")
  });

  router.get('/toka/kolmas', function(req, res) {
    res.send('kukkuluuruuu');
    console.log("no kukkuu")
  });

  router.get('/kolmas/:nimi', function(req, res) 
  {
    res.send("kukkuluuruuu"+req.params.nimi);
    console.log(req.params.nimi);
  });


  router.post('/',
    function(request,response){
        response.send(request.body);
    
    }
);

  module.exports = router;
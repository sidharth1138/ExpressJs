var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
    res.send('Hello World product');
})

router.post('/',function(req,res){
  res.send('Got a POST Request for product');
})

router.put('/products',function(req,res){
  res.send('Got a PUT request at /product');
})

router.delete('/products',function(req,res){
  res.send('Got a DELETE request at /product');
})


module.exports = router;

const express = require("express");
// helping for routing.
const router = express.Router();

router.get('/all', (req, res) => {
    res.json('Hello World all product!')
  })

router.post('/create', (req, res) => {
  console.log(req.body);
    res.json('Hello World!')
  })
  
  router.get('/get/:id', (req, res) => {
    res.json('Hello World!')
  })
  
  
  router.get('/update/:id', (req, res) => {
    res.json('Hello World!')
  })
  
  router.get('/delete/:id', (req, res) => {
    console.log(req);
    res.json('Hello World!')
  })

  module.exports=router;
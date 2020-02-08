var express = require('express');
var router = express.Router();

const recyclers = require('../controllers/orders.controller');

router.post('/create_recyclers', recyclers.createNewRecycler);



module.exports = router;

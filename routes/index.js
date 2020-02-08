var express = require('express');
var router = express.Router();

const recyclers = require('../controllers/orders.controller');

router.post('/create_recyclers', recyclers.createNewRecycler);
router.get('/fetch_recyclers', recyclers.fetchRecyclers);
router.post('/create_new_order', recyclers.createNewOrder);


module.exports = router;

const orderModel = require('../models/index').Orders;
const recyclerModel = require('../models/index').Recyclers;
const responseHelper = require('../helpers/response.helper');

exports.createNewOrder = async (req, res) => {
    const body = req.body;

    try {
        await orderModel.create(body);
        return responseHelper.createSuccessResponse(res, 200, { message: 'order created successfully'}, 'json');
    } catch(e) {
        console.error(e);
        return responseHelper.createErrorResponse(res, 422, { message: 'unable to create new order'});
    }
}


exports.createNewRecycler = async (req, res) => {
    const body = req.body;

    try {
        body.interests = JSON.stringify(body.interests);
        await recyclerModel.create(body);
        return responseHelper.createSuccessResponse(res, 200, { message: 'recycler created successfully'}, 'json');
    } catch(e) {
        console.error(e);
        return responseHelper.createErrorResponse(res, 422, { message: 'unable to create recycler' });
    } 
}


exports.fetchRecyclers = async (req, res) => {
    try {
        let recyclers = recyclerModel.findAll();
        return responseHelper.createSuccessResponse(res, 200, recyclers, 'array');
    } catch(e) {
        console.error(e);
        return responseHelper.createErrorResponse(res, 422, { message: 'unable to fetch at this time' });
    }
}
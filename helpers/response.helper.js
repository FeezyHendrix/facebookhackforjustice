
exports.createSuccessResponse = (res, status, message, type) => {
    if(type === 'json') return res.status(status).json(message);

    if(type === 'array') return res.status(status).send(message);

    if(type === 'send') return res.status(status).send(message);
}

exports.createErrorResponse = (res, status, message) => {
    return res.status(status).send(message);
}
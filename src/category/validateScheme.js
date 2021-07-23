const Joi = require('@hapi/joi');

module.exports = {
    addNew:{
        body: {
            name: Joi.string().required().min(3),
            color: Joi.string().min(3)
        }
    },
    updateOne:{
        params: {
            id: Joi.string().required()
        },
        body:{
            name: Joi.string().required().min(3),
            color: Joi.string().min(3)
        }
    },
    deleteOne: {
        params: {
            id: Joi.string().required()
        }
    }
}
const Joi = require("joi");
const createValidation = Joi.object({
  name: Joi.string().required().min(5),
  order: Joi.number().required().min(1),
});

module.exports = {
  createValidation,
};

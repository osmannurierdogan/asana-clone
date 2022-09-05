const Joi = require("joi");
const createValidation = Joi.object({
  full_name: Joi.string().required().min(3),
  password: Joi.string().required().min(4),
  email: Joi.string().email().required().min(5),
});

module.exports = {
  createValidation,
};

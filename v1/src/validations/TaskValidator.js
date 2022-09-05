const Joi = require("joi");
const createValidation = Joi.object({
  title: Joi.string().required().min(5),
  description: Joi.string().required().min(5),
});

module.exports = {
  createValidation,
};

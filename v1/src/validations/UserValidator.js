const Joi = require("joi");
const createValidation = Joi.object({
  full_name: Joi.string().required().min(5),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  email: Joi.string().required().min(5),
  profile_image: Joi.string().min(1),
});

module.exports = {
  createValidation,
};

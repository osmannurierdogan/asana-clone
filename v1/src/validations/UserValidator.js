const Joi = require("joi");
const createValidation = Joi.object({
  full_name: Joi.string().required().min(3),
  password: Joi.string().required().min(4),
  email: Joi.string().email().required().min(5),
});
const loginValidation = Joi.object({
  password: Joi.string().required().min(4),
  email: Joi.string().email().required().min(5),
});
const resetPasswordValidation = Joi.object({
  email: Joi.string().email().required().min(5),
});
const changePasswordValidation = Joi.object({
  password: Joi.string().required().min(4),
});
const updateValidation = Joi.object({
  full_name: Joi.string().min(3),
  email: Joi.string().email().min(5),
});
module.exports = {
  createValidation,
  loginValidation,
  resetPasswordValidation,
  updateValidation,
  changePasswordValidation,
};

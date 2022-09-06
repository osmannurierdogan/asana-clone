// Validate Middleware
const validate = require("../middlewares/Validate.js");
// Validations
const validationSchemas = require("../validations/UserValidator.js");
const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  create,
  remove,
  login,
  getLoginData,
} = require("../controllers/UsersController.js");

router.get("/", getAll);
router.get("/login", getLoginData);
router.get("/:id", getById);
router.route("/").post(validate(validationSchemas.createValidation), create);
// router.delete("/", remove);
router.delete("/:id", remove);
router.route("/login").post(validate(validationSchemas.loginValidation), login);

module.exports = router;

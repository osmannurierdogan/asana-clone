// Validate Middleware
const validate = require("../middlewares/Validate.js");
// Validations
const validationSchemas = require("../validations/UserValidator.js");
const authenticateToken = require("../middlewares/AuthenticateToken.js");
const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  findUser,
  createUser,
  removeUser,
  login,
  getUserProjects,
  resetPassword,
  updateUserData,
  changePassword,
  updateProfileImage,
} = require("../controllers/UsersController.js");

router.get("/", getAllUsers);

router
  .route("/")
  .post(validate(validationSchemas.createValidation), createUser);

router
  .route("/")
  .patch(
    authenticateToken,
    validate(validationSchemas.updateValidation),
    updateUserData
  );

router.route("/projects").get(authenticateToken, getUserProjects);

router.route("/login").post(validate(validationSchemas.loginValidation), login);

router
  .route("/reset-password")
  .post(validate(validationSchemas.resetPasswordValidation), resetPassword);

router
  .route("/change-password")
  .post(
    authenticateToken,
    validate(validationSchemas.changePasswordValidation),
    changePassword
  );

router.route("/update-profile-image").post(
  authenticateToken,
  // validate(validationSchemas.changePasswordValidation),
  updateProfileImage
);

router.route("/:id").delete(authenticateToken, removeUser);

router.get("/:id", findUser);

module.exports = router;

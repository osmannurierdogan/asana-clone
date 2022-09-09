// Validate Middleware
const validate = require("../middlewares/Validate.js");
// Validations
const validationSchemas = require("../validations/ProjectValidator.js");
const authenticateToken = require("../middlewares/AuthenticateToken.js");
const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  create,
  remove,
  update,
} = require("../controllers/ProjectsController.js");

router.route("/").get(authenticateToken, getAll);
router
  .route("/")
  .post(
    authenticateToken,
    validate(validationSchemas.createValidation),
    create
  );
router.get("/:id", getById);
// router.delete("/", remove);
router.route("/:id").delete(authenticateToken, remove);
router
  .route("/update/:id")
  .patch(
    authenticateToken,
    validate(validationSchemas.updateValidation),
    update
  );

module.exports = router;

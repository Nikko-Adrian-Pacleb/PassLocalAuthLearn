const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", userController.user_index);

router.get("/me", userController.user_me_get);

router.get("/register", userController.user_register_get);
router.post("/register", userController.user_register_post);

router.get("/login", userController.user_login_get);
router.post("/login", userController.user_login_post);

router.get("/logout", userController.user_logout_get);

module.exports = router;

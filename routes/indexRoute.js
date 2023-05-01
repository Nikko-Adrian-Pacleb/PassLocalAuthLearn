const router = require("express").Router();

router.get("/", (req, res) => {
  if (!res.locals.user) {
    res.redirect("/user/login");
  } else {
    res.redirect("/user/me");
  }
});

module.exports = router;

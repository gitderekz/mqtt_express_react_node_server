const {Router} = require("express");
const { pub_sub,pub_sub_save,fetch_current_weather } = require("./dashboard.controller");

const router = Router();
// Home page - Dashboard.
router.get("/", function (req, res) {
  res.render("pages/dashboard", {
    name: process.env.NAME,
    dashboardTitle: process.env.DASHBOARD_TITLE,
  });
})

router.get('/pub_sub',pub_sub)
router.get('/fetch_current_weather',fetch_current_weather)
// router.post('/pub_sub',pub_sub_save)

module.exports = router;

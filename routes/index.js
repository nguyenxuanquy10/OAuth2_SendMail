const router = require("express").Router();
const emailController = require("../controllers/sendmail")
const emailOauth2 = require("../controllers/OAuth");
router.
route("/trangchu")
    .get(function(req, res) {
        res.render('pages/homepage')
    })
router.
route("/sendmail")
    .post(emailOauth2.sendMail)
module.exports = router;
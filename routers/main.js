const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
    // res.send("main - User");
    res.render("main/index");
})
module.exports = router;
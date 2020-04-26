const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

//@route POST /api/user
//@desc  Register user

router.post(
  "/",
  [
    check("name", "Name is Required").not().isEmpty(),
    check("email", "Please include a Vaild email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more charactors"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("user route");
  }
);

module.exports = router;

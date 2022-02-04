const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

// Add a new user

const userValidator = [
  check("username", "Username is required").trim().not().isEmpty(),
  check("email", "Enter correct email").isEmail(),
  check("mobile", "Enter correct Mobile Number")
    .trim()
    .isLength({ min: 10, max: 10 }),
  check("address", "Enter correct address").trim().not().isEmpty(),
];

router.post(
  "/",
  userValidator,
  expressAsyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const e = errors.errors.map((err) => err.msg);
      res.status(400);
      throw new Error(e);
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  })
);

// get all users

router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
      const users = await User.find({})
    res.json(users);
  })
);

module.exports = router;

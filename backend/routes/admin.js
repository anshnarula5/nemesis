const bcryptjs = require("bcryptjs");
const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");


// Register Router

const registerValidator = [
  check("name", "Name is required").trim().not().isEmpty(),
  check("email", "Enter correct email").isEmail(),
  check("password", "Password should be atleast 6 characters long")
    .trim()
    .isLength({ min: 5 }),
];

router.post(
  "/",
  registerValidator,
  expressAsyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const e = errors.errors.map((err) => err.msg);
      res.status(400);
      throw new Error(e);
    }
    const { email, password, name } = req.body;
    const admin = await Admin.findOne({ email });
    if (admin) {
      res.status(400);
      throw new Error("User already exists");
    }
    const hashedPassword = await bcryptjs.hash(password, 12);
    const newAdmin = new Admin({ name, email, password: hashedPassword });
    const createdAdmin = await newAdmin.save();
    const payload = {
      // email,
      // name,
      id: createdAdmin._id,
    };
    const token = await jwt.sign(payload, "secret", { expiresIn: 36000 });
    res.json({
      name,
      email,
      id: createdAdmin._id,
      token,
    });
  })
);

// Login Router

const loginValidator = [
  check("email", "Enter correct email").isEmail(),
  check("password", "Password should be atleast 6 characters long")
    .trim()
    .isLength({ min: 5 }),
];

router.post(
  "/login",
  loginValidator,
  expressAsyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const e = errors.errors.map((err) => err.msg);
      throw new Error(e);
    }
    const { email, password} = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      throw new Error("User does not exists");
    }
      const isMatched = await bcryptjs.compare(password, admin.password)
      if (!isMatched) {
        throw new Error("Invalid credentials")
      }
    const payload = {
      // email,
      // name,
      id: admin._id,
    };
    const token = await jwt.sign(payload, "secret", { expiresIn: 36000 });
    res.json({
      name : admin.name,
      email,
      id: admin._id,
      token,
    });
  })
);

module.exports = router;

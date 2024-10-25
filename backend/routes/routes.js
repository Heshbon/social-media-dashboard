const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const router = express.Router();


const JWT_SECRET = "your_secret_key";

// User Routes
router.post("/users", async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get user by username
router.get("/users/byname", async (req, res) => {
    try {
        const first_name = req.query.user_name;
        const result = await User.find({ username: username });
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a user (PUT)
router.put("/users/:id", async (req, res) => {
  const allowedUpdates = ['username', 'bio', 'email'];
  const updates = Object.keys(req.body);
  
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
      return res.status(400).json({ message: "Invalid updates!" });
  }

  try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      
      if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
      }
      
      res.status(200).json(updatedUser);
  } catch (err) {
      console.error(err);  // Log error for debugging
      res.status(500).json({ message: "Internal Server Error." });
  }
});

// Delete a user (DELETE)
router.delete("/users/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Registration Route
router.post("/register-user", async (req, res) => {
  const {username, email, password, firstName, lastName } = req.body;
  try {
    // check if user is already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({message: " Email already in use."})
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName
    });

    // save the user to the db

    await newUser.save();

    res.status(201).json({message: "User registered successfully." });
  } catch (err) {
    res.status(400).json({message: err.message });
  }
});

// sign-in route

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({message: "User not found." });
    }
    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({message:"Invalid password." });
    }

    // generate token
    const token = jwt.sign({id:user._id}, JWT_SECRET, {expiresIn: '15min'});

    res.status(200).json({token});
  } catch (err) {
    res.status(500).json({message:"Internal server error."});
  }
});

// Post Routes
router.post("/posts", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find().populate("user", "username");
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Comment Routes
router.post("/comments", async (req, res) => {
    const newComment = new Comment(req.body);
    try {
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
const express = require("express");
const collection = require("../mongo")
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);
console.log(hashedPassword)
      const data = {
        email: email,
        password: hashedPassword, // Store the hashed password in the database
      };

      await collection.insertMany([data]);

      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

module.exports = router;
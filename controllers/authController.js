const pool = require("../config/db");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
      [username, hashedPassword],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: "Username already exists" });
  }
};

const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);

  if (result.rows.length === 0) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const user = result.rows[0];

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ error: "wrong password" });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
};

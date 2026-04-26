const pool = require("../config/db");

exports.getSessions = async (req, res) => {
  const result = await pool.query("SELECT * FROM sessions ORDER BY id ASC");
  res.json(result.rows);
};

exports.createSession = async (req, res) => {
  const { duration, notes } = req.body;

  if (!duration || typeof duration !== "number") {
    return res.status(400).json({ error: "Duration must be a number" });
  }

  const result = await pool.query(
    "INSERT INTO sessions (duration, notes) VALUES ($1, $2) RETURNING *",
    [duration, notes],
  );

  res.status(201).json(result.rows[0]);
};

exports.getSessionById = async (req, res) => {
  const id = parseInt(req.params.id);

  const result = await pool.query("SELECT * FROM sessions WHERE id = $1", [id]);

  if (result.rows.length === 0) {
    return res.status(404).json({ error: "Session not found" });
  }

  res.json(result.rows[0]);
};

exports.deleteSession = async (req, res) => {
  const id = parseInt(req.params.id);

  const result = await pool.query(
    "DELETE FROM sessions WHERE id = $1 RETURNING *",
    [id],
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ error: "Session not found" });
  }

  res.json({ message: "Session deleted" });
};

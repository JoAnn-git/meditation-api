const pool = require("../config/db");

exports.getSessions = async (req, res) => {
  const userId = req.user.userId;

  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const offset = (page - 1) * limit;

  const result = await pool.query(
    `SELECT * FROM sessions 
     WHERE user_id = $1 
     ORDER BY date DESC 
     LIMIT $2 OFFSET $3`,
    [userId, limit, offset],
  );

  res.json(result.rows);
};

exports.createSession = async (req, res) => {
  const { duration, notes } = req.body;
  const userId = req.user.userId;

  const result = await pool.query(
    "INSERT INTO sessions (duration, notes, user_id) VALUES ($1, $2, $3) RETURNING *",
    [duration, notes, userId],
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

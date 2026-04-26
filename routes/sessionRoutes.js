const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getSessions,
  createSession,
  getSessionById,
  deleteSession,
} = require("../controllers/sessionController");

router.post("/sessions", authMiddleware, createSession);
router.get("/sessions", getSessions);

router.get("/sessions/:id", getSessionById);
router.delete("/sessions/:id", deleteSession);

module.exports = router;

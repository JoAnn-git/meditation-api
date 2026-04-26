const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getSessions,
  createSession,
  getSessionById,
  deleteSession,
} = require("../controllers/sessionController");

router.get("/sessions", authMiddleware, getSessions);
router.post("/sessions", authMiddleware, createSession);

router.get("/sessions/:id", getSessionById);
router.delete("/sessions/:id", deleteSession);

module.exports = router;

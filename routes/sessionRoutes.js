const express = require("express");
const router = express.Router();

const {
  getSessions,
  createSession,
  getSessionById,
  deleteSession,
} = require("../controllers/sessionController");

router.get("/sessions", getSessions);
router.post("/sessions", createSession);
router.get("/sessions/:id", getSessionById);
router.delete("/sessions/:id", deleteSession);

module.exports = router;

let sessions = [
  {
    id: 1,
    duration: 20,
    notes: "sample session",
    date: new Date(),
  },
];
let currentId = 2;

exports.getSessions = (req, res) => {
  res.json(sessions);
};

exports.createSession = (req, res) => {
  const { duration, notes } = req.body;

  if (!duration || typeof duration !== "number") {
    return res.status(400).json({
      error: "Duration must be a number",
    });
  }

  if (duration <= 0) {
    return res.status(400).json({
      error: "Duration must be greater than 0",
    });
  }

  const newSession = {
    id: currentId++,
    duration,
    notes: notes || "",
    date: new Date(),
  };

  sessions.push(newSession);

  res.status(201).json(newSession);
};

exports.getSessionById = (req, res) => {
  const id = parseInt(req.params.id);

  const session = sessions.find((s) => s.id === id);

  if (!session) {
    return res.status(404).json({
      error: "Session not found",
    });
  }

  res.json(session);
};

exports.deleteSession = (req, res) => {
  const id = parseInt(req.params.id);

  const index = sessions.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Session not found",
    });
  }

  sessions.splice(index, 1);

  res.json({ message: "Session deleted" });
};

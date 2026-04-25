const express = require("express");
const app = express();

app.use(express.json());

const sessionRoutes = require("./routes/sessionRoutes");
app.use("/", sessionRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`
    <h1>🧘 Meditation API</h1>
    <p>Welcome! This is a backend API project.</p>
    // <p>Available endpoints:</p>
    // <ul>
    //   <li>GET /sessions</li>
    //   <li>POST /sessions</li>
    //   <li>GET /sessions/:id</li>
    //   <li>DELETE /sessions/:id</li>
    // </ul>
    <p>You will see more soon, Thank for my friends support(spiritual support)</p>
  `);
});

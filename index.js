const express = require("express");
const app = express();

app.use(express.json());

const sessionRoutes = require("./routes/sessionRoutes");
app.use("/", sessionRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

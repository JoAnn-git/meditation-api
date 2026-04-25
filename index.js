const express = require("express");
const app = express();

app.use(express.json());

const sessionRoutes = require("./routes/sessionRoutes");
app.use("/", sessionRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

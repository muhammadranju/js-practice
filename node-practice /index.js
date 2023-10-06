const express = require("express");
const app = express();
const PORT = 3030;
app.get("/", (req, res) => {
  return res.status(200).send("Hello");
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

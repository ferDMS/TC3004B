const express = require("express");
const app = express();

app.get("/hello/:name", (request, response) => {
  const { name } = request.params;
  response.json({ message: `Hello (through routing) ${name}` });
});

app.get("/hello", (request, response) => {
  const { name } = request.query;
  response.json({ message: `Hello (through params) ${name}` });
});

app.listen(3001, () => {
  console.log("Server on port 3001");
});

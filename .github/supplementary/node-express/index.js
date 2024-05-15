const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/fetch-todos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todos = response.data;
    console.log(todos); // Print the results to the CLI
    res.json(todos); // Send the results as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching todos");
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

const axios = require("axios");


async function getTodos() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todos = response.data;
    console.log(JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error(error);
  }
}

getTodos();
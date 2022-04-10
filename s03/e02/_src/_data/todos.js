const fetch = require("node-fetch");





module.exports = async function() {
  const URL = `https://jsonplaceholder.typicode.com/todos/`;
  return fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      return data;
    });
}

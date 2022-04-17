const EleventyFetch = require("@11ty/eleventy-fetch");




module.exports = async function() {
  const URL = `https://jsonplaceholder.typicode.com/todos/`;
  const data = await EleventyFetch(URL, {
		duration: '1s',
		type: 'json'
	});

	return data.map(item => {

		item.title = item.title[0].toUpperCase() + 
		item.title.slice(1);
		item.paco = '🦄';
		return item;
	});
}

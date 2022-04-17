function getCurrentYear() {
	return new Date().getFullYear();
}

function version() {
	return +new Date();
}

module.exports = {
  "footer": `@${getCurrentYear()} - Maquetando con paquito 🦄 :)`,
	"version": version()
}

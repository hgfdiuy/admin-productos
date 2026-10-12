const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    video: true, // <-- Agrega esta línea para grabar video
    setupNodeEvents(on, config) {},
  },
})
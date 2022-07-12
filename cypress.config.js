const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseURL: "https://factory.katanamrp.com",
      loginBaseURL: "https://katanamrp.com",
      login: "/login",
      sell: "/sales",
      make: "/manufacturingorders",
      buy: "/purchases",
      stock: "/inventory",
      items: "/products",
      contacts: "/contacts/customers",
      settings: "/settings/general",
      account: "/account",
      team: "/team",
      subscription: "/subscription",
      username: "farhanmgood@gmail.com",
      password: "Test1234",
      wrongPassword: "Test123456",
    },
  },
});

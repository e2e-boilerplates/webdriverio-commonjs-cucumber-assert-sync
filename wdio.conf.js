const headed = {
  runner: "local",
  path: "/",
  specs: ["./features/*.feature"],
  capabilities: [
    {
      browserName: "chrome"
    }
  ],
  services: ["chromedriver"],
  logLevel: "silent",
  framework: "cucumber",
  cucumberOpts: {
    require: ["./features/step_definitions/stepdefs.js"],
    timeout: 60000
  },
  reporters: ["dot"]
};

const headless = {
  runner: "local",
  path: "/",
  specs: ["./features/*.feature"],
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"]
      }
    }
  ],
  services: ["chromedriver"],
  logLevel: "silent",
  framework: "cucumber",
  cucumberOpts: {
    require: ["./features/step_definitions/stepdefs.js"],
    timeout: 60000
  },
  reporters: ["dot"]
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;

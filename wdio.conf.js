const headed = {
  runner: "local",
  path: "/",
  specs: ["./features/*.feature"],
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "cucumber",
  reporters: ["dot"],
  mochaOpts: {},
  jasmineNodeOpts: {},
  cucumberOpts: {
    require: ["./features/step_definitions/stepdefs.js"],
    timeout: 60000,
  },
  // eslint-disable-next-line no-unused-vars
  before: (capabilities, specs) => {},
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
      },
    },
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "cucumber",
  reporters: ["dot"],
  mochaOpts: {},
  jasmineNodeOpts: {},
  cucumberOpts: {
    require: ["./features/step_definitions/stepdefs.js"],
    timeout: 60000,
  },
  // eslint-disable-next-line no-unused-vars
  before: (capabilities, specs) => {},
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;

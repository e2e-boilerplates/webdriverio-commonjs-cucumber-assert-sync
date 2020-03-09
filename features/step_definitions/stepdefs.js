const { Given, When, Then } = require("cucumber");
const assert = require("assert");

Given(/^Navigate to the sandbox$/, () => {
  browser.url("https://e2e-boilerplate.github.io/sandbox/");
});

When(/^I am on the sandbox page$/, () => {
  const title = browser.getTitle();
  assert.strictEqual(title, "Sandbox");
});

Then(/^The page header should be "([^"]*)"$/, expectedHeader => {
  const header = $("h1").getText();
  assert.strictEqual(header, expectedHeader);
});

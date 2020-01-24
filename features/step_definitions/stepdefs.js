const { Given, When, Then } = require("cucumber");
const assert = require("assert");

Given(/^Navigate to the sandbox$/, function() {
  browser.url("https://e2e-boilerplates.github.io/sandbox/");
});

When(/^I am on the sandbox page$/, function() {
  const title = browser.getTitle();
  assert.strictEqual(title, "Sandbox");
});

Then(/^The page header should be "([^"]*)"$/, function(expectedHeader) {
  const header = $("h1").getText();
  assert.strictEqual(header, expectedHeader);
});

const { Given, When, Then } = require("cucumber");
const { strictEqual } = require("assert");

Given(/^Navigate to the sandbox$/, () => {
  browser.url("https://e2e-boilerplates.github.io/sandbox/");
});

When(/^I am on the sandbox page$/, () => {
  const title = browser.getTitle();
  strictEqual(title, "Sandbox");
});

Then(/^The page header should be "([^"]*)"$/, async expectedHeader => {
  const header = await $("h1").getText();
  strictEqual(header, expectedHeader);
});

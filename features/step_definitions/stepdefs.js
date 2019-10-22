const { Given, When, Then } = require("cucumber");
const assert = require("assert");

Given("I am on the Google search page", async () => {
  await browser.url("https://www.google.com/");
  const title = await browser.getTitle();
  assert.strictEqual(title, "Google");
});

When("I search for {string}", async searchWord => {
  const searchBox = await $(".gLFyf.gsfi");
  assert.strictEqual(await searchBox.isDisplayed(), true);
  await searchBox.addValue(searchWord);

  const googleSearchButton = await $(".gNO89b");
  googleSearchButton.waitForDisplayed(5000);
  googleSearchButton.click();
});

Then("the page title should start with {string}", async searchWord => {
  assert.ok(true);
  const resultStats = await $("#resultStats");
  resultStats.waitForDisplayed(5000);

  const title = await browser.getTitle();
  const words = title.split(" ");
  assert.strictEqual(words[0], searchWord);
});

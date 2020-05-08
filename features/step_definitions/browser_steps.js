var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var {setDefaultTimeout} = require('cucumber');
var assert = require('assert');
var promise = require('selenium-webdriver').promise;

// Default timeout set here to prevent page load errors. 5000ms for element locators hardcoded below.
setDefaultTimeout(30000);

// This function just allows me to slow down the script. Otherwise, it zooms through.
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   

defineSupportCode(function({Given, When, Then}) {
  Given('I am on {stringInDoubleQuotes}', function(link) {
    return this.driver.get(link);

  });

  Then('I click on {stringInDoubleQuotes}', function (text) {
    return this.driver.findElement({linkText: text}).then(function(element) {
      return element.click();
    });
  });

  Then('I click on button with name {stringInDoubleQuotes}', function (text) {
    var xpath = "//input[@name='" + text + "']"
    return this.driver.findElement({xpath:xpath}).then(function(element) {
      return element.click();
    });
  });
  Then('I should see {stringInDoubleQuotes}', function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
  Then('I should see {stringInDoubleQuotes} on github', function (text) {
    var xpath = "//div[contains(@class, 'result') and text() = '" + text + "']";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
  Then('I should see h2 {stringInDoubleQuotes}', function (text) {
    var xpath = "//h2[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
  Then('I should see xpath {stringInDoubleQuotes}', function (text) {
    var xpath = text;
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
  Then('I should see list item {stringInDoubleQuotes}', function (text) {
    var xpath = "//li[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
  Then('I find {int} buttons with text {stringInDoubleQuotes}', async function (int, text) {
    var count = 0;
    var xpath = "//a[contains(text(),'" + text + "')]";
    let links = await this.driver.findElements({xpath:xpath});
    for(let link of links) {
        count = count + 1
        text = await link.getText();
    }
    assert(count == int)
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
  Then('I click link {stringInDoubleQuotes}', async function (text) {
    var xpath = ".//a[contains(text(),'" + text + "')]";
    await this.driver.findElement({xpath:xpath}).click();
    await sleep(2000)
  });
  Then('I click button {stringInDoubleQuotes}', async function (text) {
    var xpath = "//button[contains(text(),'" + text + "')]";
    await this.driver.findElement({xpath:xpath}).click();
    await sleep(2000)
  });
  Then('I click last link {stringInDoubleQuotes}', async function (text) {
    var xpath = "(.//a[contains(text(),'" + text + "')])[last()]";
    await this.driver.findElement({xpath:xpath}).click();
    await sleep(500)
  });
  Then('I should see {stringInDoubleQuotes} link in sidebar', async function (text) {
    var xpath = "//a[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    await sleep(1000)
    return this.driver.wait(condition, 5000);
  });

// ElementNotVisibleError: element not interactable
// This would require website code changes to test as I have tried exact Xpath (to ensure I clicked the exact element) and it did not work
  Then('I click {stringInDoubleQuotes} link in sidebar', async function (text) {
    var xpath = "//a[contains(text(),'" + text + "')]";
    await this.driver.findElement({xpath:xpath}).click();
    await sleep(1000)
  });

  Then('I should see it in the rgb div', async function () {
    var xpath = "/div[contains(@style,'background-color: rgb(212, 237, 218)')]"
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
  // Could not resolve current URL -- Decided to go with direct xpath as it is broad enough to support testing
  // Original plan was to if/elseif the change between id and name attribute between sites
  Then('I fill {stringInDoubleQuotes} field with {stringInDoubleQuotes}', async function (xpath, text) {
    this.driver.findElement({xpath:xpath}).sendKeys(text)
    await sleep(500)
  });

  Then('I select {stringInDoubleQuotes} option from drop down', async function (text) {
    var xpath = "//option[contains(text(),'" + text + "')]"
    this.driver.findElement({xpath:xpath}).click()
    await sleep(500)
  });

  Then('I select checkbox {stringInDoubleQuotes}', async function (xpath) {
    this.driver.findElement({xpath:xpath}).click()
    await sleep(500)
  });
  Then('I verify {stringInDoubleQuotes} field is empty', async function (name) {
    // Added sleep here instead of when I click View Citation
    await sleep(1000)
    var xpath = "//input[@name='" + name + "']"
    var field = this.driver.findElement({xpath:xpath})
    console.log(field.value)
    // FIX THIS
  });

  Then('I verify I am on page {stringInDoubleQuotes}', async function (text) {
    var condition = seleniumWebdriver.until.urlIs(text);
    await sleep(2000)
    return this.driver.wait(condition, 10000);
  });

  Then('I should see h1 {stringInDoubleQuotes}', function (text) {
    var xpath = "//h1[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });

  Then('I should see rgb text {stringInDoubleQuotes}', function (text) {
    var xpath = "//div[contains(@style,'color: rgb(185, 74, 72)')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
  Then('I click radio {stringInDoubleQuotes}', async function (value) {
    if(value == 'startsWithCupcakeIpsum') {
      var xpath = "//input[@name='" + value + "']";
    }
    else
    {
      var xpath = "//input[@value='" + value + "']";
    }
    await this.driver.findElement({xpath:xpath}).click();
    await sleep(500)
  });
  Then('I should see rgb text {stringInDoubleQuotes}', function (text) {
    var xpath = "//div[contains(@style,'color: rgb(185, 74, 72)')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
  Then('I click radio {stringInDoubleQuotes} on github', async function (text) {
    
    var xpath = "//label[contains(text(),'" + text + "')]";
    await this.driver.findElement({xpath:xpath}).click();
    await sleep(1000)
  });

  Then('I find {int} {stringInDoubleQuotes}', async function (int, text) {
    await sleep(500)
    var count = 0;
    var xpath = "//*[contains(text(),'" + text + "')]";
    let links = await this.driver.findElements({xpath:xpath});
    for(let link of links) {
        count = count + 1
        text = await link.getText();
    }
    console.log("I FOUND: " + count)
    assert(count == int)
  });

  // Did not have time to create logic, so I tried using aria-hidden attribute
  // Unfortunately, no noticeable HTML code change results from expanding "Filter on Board Game Category »"
  Then('I find {int} {stringInDoubleQuotes} on boardgamegeek', async function (int, text) {
    var count = 0;
    var xpath = "//span[@aria-hidden='false' and contains(text(),'" + text + "')]";
    let links = await this.driver.findElements({xpath:xpath});
    for(let link of links) {
        count = count + 1
        text = await link.getText();
    }
    assert(count == int)
  });
  Then('I select {stringInDoubleQuotes} option from {stringInDoubleQuotes} drop down', async function (option, id) {
    var xpath = "//select[@id='" + id + "']//option[contains(text(),'" + option + "')]"
    this.driver.findElement({xpath:xpath}).click()
    await sleep(500)
  });
});

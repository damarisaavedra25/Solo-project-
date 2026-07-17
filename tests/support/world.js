const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

class CustomWorld {
  constructor() {
    this.page = null;
    this.browser = null;
  }

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }

  async close() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
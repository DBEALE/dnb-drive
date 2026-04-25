// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:8765',
    browserName: 'chromium',
    headless: true,
    viewport: { width: 1280, height: 800 },
    colorScheme: 'dark',
    screenshot: 'only-on-failure',
    video: 'off',
  },
  webServer: {
    command: 'python -m http.server 8765',
    url: 'http://localhost:8765',
    reuseExistingServer: true,
    timeout: 10000,
  },
});

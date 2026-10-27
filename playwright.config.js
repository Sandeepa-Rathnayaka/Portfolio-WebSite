import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: { timeout: 7_000 },
  fullyParallel: true,
  retries: 1,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL: 'https://sandeeparathnayakaportfolio.netlify.app',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] }, testIgnore: /responsive/ },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] }, testIgnore: /responsive/ },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] }, testIgnore: /responsive/ },
    { name: 'mobile-chrome', use: { ...devices['Pixel 5'] }, testMatch: /responsive/ },
  ],
});
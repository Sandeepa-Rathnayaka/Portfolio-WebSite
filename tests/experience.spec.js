import { test, expect } from '@playwright/test';
import { experience } from '../src/data/portfolio.js';

test.describe('Experience section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#experience').scrollIntoViewIfNeeded();
  });

  test('heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: "Where I've worked" })).toBeVisible();
  });

  test('job role, company and period', async ({ page }) => {
    const job = experience[0];
    await expect(page.locator('.exp-role')).toHaveText(job.role);
    await expect(page.locator('.exp-company')).toHaveText(job.company);
    await expect(page.locator('.exp-period')).toHaveText(job.period);
  });

  test('all experience items are rendered', async ({ page }) => {
    const items = experience[0].items;
    await expect(page.locator('.exp-item')).toHaveCount(items.length);
    for (const it of items) {
      await expect(page.locator('.exp-item-title', { hasText: it.title })).toBeVisible();
    }
  });

  test('QA and Development badges match data', async ({ page }) => {
    const items = experience[0].items;
    const qa = items.filter(i => i.type === 'QA').length;
    const dev = items.filter(i => i.type === 'DEV').length;
    await expect(page.locator('.exp-item-type', { hasText: 'Quality Assurance' })).toHaveCount(qa);
    await expect(page.locator('.exp-item-type', { hasText: 'Development' })).toHaveCount(dev);
  });
});
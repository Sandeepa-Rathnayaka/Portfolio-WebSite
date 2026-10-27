import { test, expect } from '@playwright/test';
import { skills } from '../src/data/portfolio.js';

test.describe('Skills section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#skills').scrollIntoViewIfNeeded();
  });

  test('heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'My tech stack' })).toBeVisible();
  });

  test('every category is rendered', async ({ page }) => {
    await expect(page.locator('.skill-cat')).toHaveCount(Object.keys(skills).length);
    for (const cat of Object.keys(skills)) {
      await expect(page.locator('.skill-cat-name', { hasText: cat }).first()).toBeVisible();
    }
  });

  for (const [cat, items] of Object.entries(skills)) {
    test(`"${cat}" shows ${items.length} skill tags`, async ({ page }) => {
      const card = page.locator('.skill-cat').filter({ has: page.locator('.skill-cat-name', { hasText: new RegExp(`^${cat.replace(/[/&]/g, '\\$&')}$`) }) });
      await expect(card.locator('.skill-tag')).toHaveCount(items.length);
    });
  }
});
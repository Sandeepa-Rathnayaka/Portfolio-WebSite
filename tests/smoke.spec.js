import { test, expect } from '@playwright/test';

test.describe('Smoke', () => {
  test('page loads with a title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.+/);
  });

  test('all main sections exist', async ({ page }) => {
    await page.goto('/');
    for (const id of ['hero', 'about', 'experience', 'projects', 'skills', 'contact']) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test('no console errors or failed requests', async ({ page }) => {
    const errors = [];
    const failed = [];
    page.on('console', m => m.type() === 'error' && errors.push(m.text()));
    page.on('response', r => r.status() >= 400 && failed.push(`${r.status()} ${r.url()}`));
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(errors, errors.join('\n')).toEqual([]);
    expect(failed, failed.join('\n')).toEqual([]);
  });
});
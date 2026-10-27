import { test, expect } from '@playwright/test';

test.describe('Mobile layout', () => {
  test.beforeEach(async ({ page }) => await page.goto('/'));

  test('burger is visible and desktop links are hidden', async ({ page }) => {
    await expect(page.locator('.nav-burger')).toBeVisible();
    await expect(page.locator('.nav-links.desktop')).toBeHidden();
  });

  test('burger opens and closes the mobile menu', async ({ page }) => {
    await page.locator('.nav-burger').click();
    await expect(page.locator('.mobile-menu')).toHaveClass(/open/);
    await page.locator('.nav-burger').click();
    await expect(page.locator('.mobile-menu')).not.toHaveClass(/open/);
  });

  test('tapping a mobile link scrolls and closes the menu', async ({ page }) => {
    await page.locator('.nav-burger').click();
    await page.locator('.mobile-menu').getByRole('link', { name: 'Projects' }).click();
    await expect(page.locator('#projects')).toBeInViewport();
    await expect(page.locator('.mobile-menu')).not.toHaveClass(/open/);
  });

  test('no horizontal overflow', async ({ page }) => {
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);
  });

  test('hero content is visible on mobile', async ({ page }) => {
    await expect(page.locator('.hero-name')).toBeVisible();
    await expect(page.locator('.hero-photo')).toBeVisible();
  });
});
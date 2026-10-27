import { test, expect } from '@playwright/test';

const links = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
];

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => await page.goto('/'));

  test('logo and Hire Me button are visible', async ({ page }) => {
    await expect(page.locator('.nav-logo')).toBeVisible();
    await expect(page.locator('a.nav-cta')).toHaveAttribute('href', /^mailto:sandeeparathnayaka20@gmail\.com/);
  });

  test('desktop shows all nav links in order', async ({ page }) => {
    await expect(page.locator('.nav-links.desktop a')).toHaveText(links.map(l => l[0]));
  });

  for (const [label, id] of links) {
    test(`clicking "${label}" scrolls to ${id}`, async ({ page }) => {
      await page.locator('.nav-links.desktop').getByRole('link', { name: label }).click();
      await expect(page.locator(id)).toBeInViewport();
    });
  }

  test('navbar gets "scrolled" class after scrolling', async ({ page }) => {
    await expect(page.locator('nav.navbar')).not.toHaveClass(/scrolled/);
    await page.evaluate(() => window.scrollTo(0, 300));
    await expect(page.locator('nav.navbar')).toHaveClass(/scrolled/);
  });

  test('logo scrolls back to top', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 2000));
    await page.locator('.nav-logo').click();
    await expect(page.locator('#hero')).toBeInViewport();
  });
});
import { test, expect } from '@playwright/test';
import { personal } from '../src/data/portfolio.js';

test.describe('Footer', () => {
  test('shows copyright with current year and social links', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer.footer');
    await footer.scrollIntoViewIfNeeded();
    await expect(footer.locator('.footer-copy'))
      .toContainText(`© ${new Date().getFullYear()} Sandeepa Rathnayaka`);
    await expect(footer.getByLabel('GitHub')).toHaveAttribute('href', personal.github);
    await expect(footer.getByLabel('LinkedIn')).toHaveAttribute('href', personal.linkedin);
    await expect(footer.getByLabel('Email')).toHaveAttribute('href', `mailto:${personal.email}`);
  });
});
import { test, expect } from '@playwright/test';
import { personal } from '../src/data/portfolio.js';

test.describe('Contact section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();
  });

  test('contact links have correct hrefs', async ({ page }) => {
    const c = page.locator('.contact-links');
    await expect(c.locator(`a[href="mailto:${personal.email}"]`)).toBeVisible();
    await expect(c.locator(`a[href="tel:${personal.phone}"]`)).toBeVisible();
    await expect(c.locator(`a[href="${personal.linkedin}"]`)).toBeVisible();
    await expect(c.locator(`a[href="${personal.github}"]`)).toBeVisible();
    await expect(c).toContainText('Sri Lanka');
  });

  test('form fields are visible and empty', async ({ page }) => {
    await expect(page.locator('input[name="name"]')).toHaveValue('');
    await expect(page.locator('input[name="email"]')).toHaveValue('');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('');
  });

  test('empty submit is blocked by required validation', async ({ page }) => {
    await page.getByRole('button', { name: 'Send Message' }).click();
    const invalid = await page.locator('input[name="name"]').evaluate(el => el.validity.valueMissing);
    expect(invalid).toBe(true);
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
  });

  test('invalid email format is rejected', async ({ page }) => {
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('not-an-email');
    await page.locator('textarea[name="message"]').fill('Hello');
    await page.getByRole('button', { name: 'Send Message' }).click();
    const typeMismatch = await page.locator('input[name="email"]').evaluate(el => el.validity.typeMismatch);
    expect(typeMismatch).toBe(true);
  });

  test('valid submit shows "Opening mail client..."', async ({ page }) => {
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('textarea[name="message"]').fill('Hi, I would like to discuss an opportunity.');
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.locator('.form-submit')).toContainText('Opening mail client...');
  });
});
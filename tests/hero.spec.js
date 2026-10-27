import { test, expect } from '@playwright/test';
import { personal } from '../src/data/portfolio.js';

test.describe('Hero section', () => {
  test.beforeEach(async ({ page }) => await page.goto('/'));

  test('shows name, badge and bio', async ({ page }) => {
    await expect(page.locator('.hero-name')).toHaveText(personal.name);
    await expect(page.locator('.hero-badge')).toContainText('Available for opportunities');
    await expect(page.locator('.hero-bio')).toHaveText(personal.bio);
  });

  test('typing animation shows one of the roles', async ({ page }) => {
    const pattern = new RegExp(`^(${personal.roles.join('|')})$`);
    await expect(page.locator('.hero-role-text')).toHaveText(pattern, { timeout: 10_000 });
  });

  test('profile photo loads', async ({ page }) => {
    const img = page.locator('.hero-photo');
    await expect(img).toBeVisible();
    const loaded = await img.evaluate(el => el.complete && el.naturalWidth > 0);
    expect(loaded).toBe(true);
  });

  test('social links have correct hrefs', async ({ page }) => {
    const socials = page.locator('.hero-socials');
    await expect(socials.getByLabel('GitHub')).toHaveAttribute('href', personal.github);
    await expect(socials.getByLabel('LinkedIn')).toHaveAttribute('href', personal.linkedin);
    await expect(socials.getByLabel('Email')).toHaveAttribute('href', `mailto:${personal.email}`);
    await expect(socials.getByLabel('Phone')).toHaveAttribute('href', `tel:${personal.phone}`);
  });

  test('stats are displayed', async ({ page }) => {
    await expect(page.locator('.stat')).toHaveCount(3);
    await expect(page.locator('.hero-stats')).toContainText('Projects');
    await expect(page.locator('.hero-stats')).toContainText('Research Papers');
    await expect(page.locator('.hero-stats')).toContainText('Certifications');
  });

  test('"View Projects" scrolls to projects', async ({ page }) => {
    await page.getByRole('link', { name: 'View Projects' }).click();
    await expect(page.locator('#projects')).toBeInViewport();
  });

  test('"Get In Touch" scrolls to contact', async ({ page }) => {
    await page.getByRole('link', { name: 'Get In Touch' }).click();
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('scroll indicator goes to About', async ({ page }) => {
    await page.locator('.hero-scroll').click();
    await expect(page.locator('#about')).toBeInViewport();
  });
});
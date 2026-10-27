import { test, expect } from '@playwright/test';
import { education, certifications } from '../src/data/portfolio.js';

test.describe('About section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#about').scrollIntoViewIfNeeded();
  });

  test('heading and bio are visible', async ({ page }) => {
    await expect(page.locator('#about .section-title'))
      .toHaveText('Crafting digital experiences with precision');
    await expect(page.locator('.about-bio')).toHaveCount(2);
  });

  test('location and focus info', async ({ page }) => {
    await expect(page.locator('.about-info-item').first()).toContainText('Sri Lanka');
    await expect(page.locator('.about-info-item').nth(1)).toContainText('Fullstack + QA + AI/ML');
  });

  test('education card shows degree details', async ({ page }) => {
    const e = education[0];
    const item = page.locator('.edu-item').first();
    await expect(item.locator('.edu-degree')).toHaveText(e.degree);
    await expect(item.locator('.edu-spec')).toHaveText(e.specialization);
    await expect(item.locator('.edu-inst')).toHaveText(e.institution);
    await expect(item.locator('.edu-period')).toHaveText(e.period);
  });

  test('all certifications are listed', async ({ page }) => {
    await expect(page.locator('.cert-item')).toHaveCount(certifications.length);
    for (const c of certifications) {
      await expect(page.locator('.cert-list')).toContainText(c.name);
    }
  });
});
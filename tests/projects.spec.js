import { test, expect } from '@playwright/test';
import { projects } from '../src/data/portfolio.js';

const featured = projects.filter(p => p.featured);

test.describe('Projects section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#projects').scrollIntoViewIfNeeded();
  });

  test('shows only featured projects by default', async ({ page }) => {
    await expect(page.locator('.project-card')).toHaveCount(featured.length);
    await expect(page.locator('.project-featured')).toHaveCount(featured.length);
    for (const p of featured) {
      await expect(page.locator('.project-title', { hasText: p.title })).toBeVisible();
    }
  });

  test('"Show All" reveals every project', async ({ page }) => {
    await page.getByRole('button', { name: `Show All (${projects.length})` }).click();
    await expect(page.locator('.project-card')).toHaveCount(projects.length);
    await expect(page.getByRole('button', { name: 'Show Less' })).toBeVisible();
  });

  test('"Show Less" collapses back', async ({ page }) => {
    await page.getByRole('button', { name: /Show All/ }).click();
    await page.getByRole('button', { name: 'Show Less' }).click();
    await expect(page.locator('.project-card')).toHaveCount(featured.length);
  });

  test('CocoTech card has tags and 3 links', async ({ page }) => {
    const card = page.locator('.project-card', { hasText: 'CocoTech' });
    await expect(card.locator('.project-type-badge')).toHaveText('Mobile + IoT');
    await expect(card.locator('.tag')).toHaveCount(6);
    await expect(card.locator('.project-link')).toHaveCount(3);
    await expect(card.getByRole('link', { name: 'Research Paper' }))
      .toHaveAttribute('href', /propulsiontechjournal\.com/);
  });

  test('external links open in new tab safely', async ({ page }) => {
    const link = page.locator('.project-card', { hasText: 'ChatBot Buddy' }).getByRole('link', { name: 'GitHub' });
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', /noreferrer/);
  });

  test('FlowBoard (no links) shows no link section', async ({ page }) => {
    const card = page.locator('.project-card', { hasText: 'FlowBoard' });
    await expect(card.locator('.project-links')).toHaveCount(0);
  });
});
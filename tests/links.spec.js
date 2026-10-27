import { test, expect } from '@playwright/test';
import { projects } from '../src/data/portfolio.js';

const urls = [...new Set(projects.flatMap(p => p.links.map(l => l.url)))];

test.describe('External project links', () => {
  for (const url of urls) {
    test(`reachable: ${url}`, async ({ request }) => {
      const res = await request.get(url, { timeout: 20_000 });
      expect(res.status(), `${url} returned ${res.status()}`).toBeLessThan(400);
    });
  }
});
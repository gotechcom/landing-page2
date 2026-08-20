import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = path.resolve(__dirname, '..', '..');

test('pnpm build passes TypeScript checks', () => {
  expect(() => {
    execSync('npx tsc --noEmit', { cwd: ROOT, stdio: 'pipe' });
  }).not.toThrow();
});

test('src/app/not-found.tsx exists and exports default function', () => {
  const filePath = path.join(ROOT, 'src/app/not-found.tsx');
  expect(fs.existsSync(filePath)).toBe(true);
  const content = fs.readFileSync(filePath, 'utf-8');
  expect(content).toMatch(/export\s+default\s+function/);
});

test('src/components/ErrorShell.tsx exists and has "use client"', () => {
  const filePath = path.join(ROOT, 'src/components/ErrorShell.tsx');
  expect(fs.existsSync(filePath)).toBe(true);
  const content = fs.readFileSync(filePath, 'utf-8');
  expect(content).toContain('"use client"');
});

test('en.ts and vi.ts both have errors key matching type', () => {
  const enPath = path.join(ROOT, 'src/i18n/en.ts');
  const viPath = path.join(ROOT, 'src/i18n/vi.ts');

  const enContent = fs.readFileSync(enPath, 'utf-8');
  const viContent = fs.readFileSync(viPath, 'utf-8');

  expect(enContent).toMatch(/errors\s*:/);
  expect(viContent).toMatch(/errors\s*:/);

  expect(enContent).toMatch(/not_found\s*:/);
  expect(enContent).toMatch(/generic\s*:/);
  expect(enContent).toMatch(/back_home\s*:/);
  expect(enContent).toMatch(/retry\s*:/);

  expect(viContent).toMatch(/not_found\s*:/);
  expect(viContent).toMatch(/generic\s*:/);
  expect(viContent).toMatch(/back_home\s*:/);
  expect(viContent).toMatch(/retry\s*:/);

  expect(enContent).toContain('satisfies Translations');
  expect(viContent).toContain('satisfies Translations');
});

test('accessing /nonexistent-route shows custom 404', async ({ page }) => {
  await page.goto('/nonexistent-route');
  await expect(page.locator('text=404')).toBeVisible();
  await expect(page.locator('h1')).toBeVisible();
});

test('toggle language vi/en on 404 page changes text', async ({ page }) => {
  await page.context().addInitScript(() => {
    localStorage.setItem('gotechcom-locale', 'vi');
  });

  await page.goto('/nonexistent-route');

  const heading = page.locator('h1');
  await expect(heading).toHaveText('Không tìm thấy trang');

  await page.context().addInitScript(() => {
    localStorage.setItem('gotechcom-locale', 'en');
  });

  await page.goto('/nonexistent-route');

  await expect(heading).toHaveText('Page not found');

  await page.context().addInitScript(() => {
    localStorage.setItem('gotechcom-locale', 'vi');
  });

  await page.goto('/nonexistent-route');

  await expect(heading).toHaveText('Không tìm thấy trang');
});

test('dark mode on 404 page applies correct background color', async ({ page }) => {
  await page.goto('/nonexistent-route');

  await expect(page.locator('html')).not.toHaveClass(/dark/);

  const lightBgVar = await page.evaluate(() =>
    getComputedStyle(document.documentElement).getPropertyValue('--background').trim()
  );
  expect(['#ffffff', '#fff']).toContain(lightBgVar);

  await page.locator('button[aria-label="Toggle theme"]').click();

  await expect(page.locator('html')).toHaveClass(/dark/);

  const darkBgVar = await page.evaluate(() =>
    getComputedStyle(document.documentElement).getPropertyValue('--background').trim()
  );
  expect(darkBgVar).toBe('#0b1120');
});

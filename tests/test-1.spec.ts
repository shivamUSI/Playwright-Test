import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.spglobal.com/en');
  await page.getByRole('link', { name: 'find-a-rating Find a Rating ' }).click();
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('link', { name: 'S&P Global', exact: true }).click();
  await page.getByRole('link', { name: 'Our History' }).click();
  await page.getByRole('button', { name: ' Explore S&P Global' }).click();
  await page.getByRole('button', { name: '' }).click();
});
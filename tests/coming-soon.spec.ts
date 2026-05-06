import { test, expect } from '@playwright/test'

test('migrated WordPress homepage renders key live-site content', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /Moyer/i }).first()).toBeVisible()
  await expect(page.getByText(/Management/i).first()).toBeVisible()
  await expect(page.getByText(/Property/i).first()).toBeVisible()
})

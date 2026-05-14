import { expect, test } from "@playwright/test"

const testUserEmail = process.env.TEST_USER_EMAIL
const testUserPassword = process.env.TEST_USER_PASSWORD

test("LOGIN PAGE VISIBLE: should show the login form fields and submit button on /login", async ({ page }) => {
  await page.goto("/login")

  const emailInput = page.getByLabel("Email")
  const passwordInput = page.getByLabel("Password")
  const submitButton = page.getByRole("button", { name: "Sign In" })

  await expect(emailInput).toBeVisible()
  await expect(passwordInput).toBeVisible()
  await expect(submitButton).toBeVisible()
})

test.describe("Authenticated auth flow", () => {
  test.beforeEach(() => {
    test.skip(
      !testUserEmail || !testUserPassword,
      "Skipping credentialed auth tests because TEST_USER_EMAIL and TEST_USER_PASSWORD are not set"
    )
  })

  test("REDIRECT AFTER LOGIN: should redirect the user to the dashboard or projects page after successful login", async ({ page }) => {
    await page.goto("/login")

    await page.getByLabel("Email").fill(testUserEmail ?? "")
    await page.getByLabel("Password").fill(testUserPassword ?? "")

    await Promise.all([
      page.waitForNavigation({ url: /\/(?:projects\/?)?$/ }),
      page.getByRole("button", { name: "Sign In" }).click(),
    ])

    await expect(page).toHaveURL(/\/(?:projects\/?)?$/)
  })

  test("SIDEBAR NAVIGATION: should display Overview, Projects, and Settings links after login", async ({ page }) => {
    await page.goto("/login")

    await page.getByLabel("Email").fill(testUserEmail ?? "")
    await page.getByLabel("Password").fill(testUserPassword ?? "")

    await Promise.all([
      page.waitForNavigation({ url: /\/(?:projects\/?)?$/ }),
      page.getByRole("button", { name: "Sign In" }).click(),
    ])

    await expect(page.locator("ul").getByRole("link", { name: "Overview" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Projects" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Settings" })).toBeVisible()
  })
})

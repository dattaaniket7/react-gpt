import { chromium } from "playwright";

describe("HelloWorld App", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://localhost:3000"); // Assuming your app is running on this URL
  });

  afterAll(async () => {
    await browser.close();
  });

  it("should toggle text visibility on button click", async () => {
    // Check if initial text is visible
    const initialText = await page.$("text=Hello world");
    expect(initialText).toBeTruthy();

    // Click the toggle button
    await page.click("text=Toggle Visibility");

    // Check if text is hidden
    const hiddenText = await page.$("text=Hello world", { state: "hidden" });
    expect(hiddenText).toBeTruthy();

    // Click the toggle button again
    await page.click("text=Toggle Visibility");

    // Check if text is visible again
    const visibleText = await page.$("text=Hello world");
    expect(visibleText).toBeTruthy();
  });
});

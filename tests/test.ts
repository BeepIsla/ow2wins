import { expect, test } from "@playwright/test";

test("increment tank to 5", async ({ page }) => {
	await page.goto("/");

	const column = await page.$(".column:nth-child(1)");
	const button = await column?.$(".card > .controls > button:nth-child(3)");
	for (let i = 0; i < 5; i++) {
		await button?.click();
	}

	const h1 = await column?.$(".card > h1:nth-child(3)");
	const text = await h1?.textContent();
	expect(text).toBe("5 Wins");

	const info = await page.evaluate<string>('localStorage.getItem("info")');
	const json = JSON.parse(info) as { wins: { [key: string]: string } };
	expect(json.wins[0]).toBe(5);
});

test("increment damage to 5", async ({ page }) => {
	await page.goto("/");

	const column = await page.$(".column:nth-child(2)");
	const button = await column?.$(".card > .controls > button:nth-child(3)");
	for (let i = 0; i < 5; i++) {
		await button?.click();
	}

	const h1 = await column?.$(".card > h1:nth-child(3)");
	const text = await h1?.textContent();
	expect(text).toBe("5 Wins");

	const info = await page.evaluate<string>('localStorage.getItem("info")');
	const json = JSON.parse(info) as { wins: { [key: string]: string } };
	expect(json.wins[1]).toBe(5);
});

test("increment support to 5", async ({ page }) => {
	await page.goto("/");

	const column = await page.$(".column:nth-child(3)");
	const button = await column?.$(".card > .controls > button:nth-child(3)");
	for (let i = 0; i < 5; i++) {
		await button?.click();
	}

	const h1 = await column?.$(".card > h1:nth-child(3)");
	const text = await h1?.textContent();
	expect(text).toBe("5 Wins");

	const info = await page.evaluate<string>('localStorage.getItem("info")');
	const json = JSON.parse(info) as { wins: { [key: string]: string } };
	expect(json.wins[2]).toBe(5);
});

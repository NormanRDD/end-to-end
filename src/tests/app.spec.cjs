const { test, expect } = require('@playwright/test');

test('проверка кнопки и случайного нечетного числа', async ({ page }) => {
  // первый тест, при открытий страницы
  await page.goto('http://localhost:5173');  

  // ищем кнопку, и кликаем
  const button = await page.locator('button');
  await button.click();

  // Проверяем, что кнопка исчезла
  await expect(button).toBeHidden();

  // Проверяем, что отображается случайное нечетное число
  const numberElement = await page.locator('#number');
  const numberText = await numberElement.textContent();
  const number = parseInt(numberText.trim(), 10);

 
  expect(number % 2).toBe(1);
  
});

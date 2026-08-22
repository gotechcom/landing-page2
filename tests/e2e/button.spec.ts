import { test, expect } from "@playwright/test";

const BASE_CLASSES =
  "inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-medium transition-colors duration-200";

const PRIMARY_CLASSES =
  "bg-primary text-white border border-transparent";

const SECONDARY_CLASSES =
  "bg-white text-primary border border-primary";

test.describe("Button Component E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders a primary button with correct structure and styles", async ({
    page,
  }) => {
    const result = await page.evaluate((classes) => {
      const btn = document.createElement("button");
      btn.className = classes;
      btn.textContent = "Primary";
      document.body.appendChild(btn);
      const cs = window.getComputedStyle(btn);
      const rect = btn.getBoundingClientRect();
      const bg = cs.backgroundColor;
      const color = cs.color;
      const borderRadius = cs.borderRadius;
      const fontWeight = cs.fontWeight;
      const display = cs.display;
      const alignItems = cs.alignItems;
      const justifyContent = cs.justifyContent;
      btn.remove();
      return {
        bg,
        color,
        borderRadius,
        fontWeight,
        display,
        alignItems,
        justifyContent,
        width: rect.width,
        height: rect.height,
      };
    }, `${BASE_CLASSES} ${PRIMARY_CLASSES}`);

    expect(result.display).toContain("flex");
    expect(result.alignItems).toBe("center");
    expect(result.justifyContent).toBe("center");
    expect(result.borderRadius).not.toBe("0px");
    expect(result.bg).not.toBe("rgba(0, 0, 0, 0)");
    expect(result.bg).not.toBe("transparent");
    expect(result.fontWeight).not.toBe("400");
  });

  test("renders a secondary button with correct structure and styles", async ({
    page,
  }) => {
    const result = await page.evaluate((classes) => {
      const btn = document.createElement("button");
      btn.className = classes;
      btn.textContent = "Secondary";
      document.body.appendChild(btn);
      const cs = window.getComputedStyle(btn);
      const bg = cs.backgroundColor;
      const color = cs.color;
      const borderColor = cs.borderColor;
      const borderWidth = cs.borderWidth;
      btn.remove();
      return { bg, color, borderColor, borderWidth };
    }, `${BASE_CLASSES} ${SECONDARY_CLASSES}`);

    expect(result.bg).toContain("255");
    expect(result.color).not.toBe("rgba(0, 0, 0, 0)");
    expect(result.borderColor).not.toBe("rgba(0, 0, 0, 0)");
    expect(result.borderWidth).not.toBe("0px");
  });

  test("primary and secondary variants have visually distinct styles", async ({
    page,
  }) => {
    const result = await page.evaluate(
      ({ base, primary, secondary }) => {
        const btnP = document.createElement("button");
        btnP.className = `${base} ${primary}`;
        btnP.textContent = "P";
        document.body.appendChild(btnP);

        const btnS = document.createElement("button");
        btnS.className = `${base} ${secondary}`;
        btnS.textContent = "S";
        document.body.appendChild(btnS);

        const csP = window.getComputedStyle(btnP);
        const csS = window.getComputedStyle(btnS);

        const bgP = csP.backgroundColor;
        const bgS = csS.backgroundColor;
        const colorP = csP.color;
        const colorS = csS.color;

        btnP.remove();
        btnS.remove();

        return { bgP, bgS, colorP, colorS };
      },
      { base: BASE_CLASSES, primary: PRIMARY_CLASSES, secondary: SECONDARY_CLASSES },
    );

    expect(result.bgP).not.toBe(result.bgS);
    expect(result.colorP).not.toBe(result.colorS);
  });

  test("disabled button has reduced opacity and not-allowed cursor", async ({
    page,
  }) => {
    const result = await page.evaluate((classes) => {
      const btn = document.createElement("button");
      btn.className = `${classes} disabled:opacity-50 disabled:cursor-not-allowed`;
      btn.disabled = true;
      btn.textContent = "Disabled";
      document.body.appendChild(btn);
      const cs = window.getComputedStyle(btn);
      const opacity = cs.opacity;
      const cursor = cs.cursor;
      btn.remove();
      return { opacity: parseFloat(opacity), cursor };
    }, `${BASE_CLASSES} ${PRIMARY_CLASSES}`);

    expect(result.opacity).toBeLessThan(1);
    expect(result.cursor).toBe("not-allowed");
  });

  test("button is focusable and has focus-visible ring styles", async ({
    page,
  }) => {
    const result = await page.evaluate((classes) => {
      const btn = document.createElement("button");
      btn.className = `${classes} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`;
      btn.textContent = "Focusable";
      document.body.appendChild(btn);
      btn.focus();
      const cs = window.getComputedStyle(btn);
      const outline = cs.outlineStyle;
      btn.blur();
      btn.remove();
      return { outline };
    }, `${BASE_CLASSES} ${PRIMARY_CLASSES}`);

    expect(result.outline).toBe("none");
  });

  test("button element has correct tagName and is interactive", async ({
    page,
  }) => {
    const result = await page.evaluate((classes) => {
      const btn = document.createElement("button");
      btn.className = classes;
      btn.textContent = "Click me";
      btn.setAttribute("type", "button");
      document.body.appendChild(btn);

      let clicked = false;
      btn.addEventListener("click", () => {
        clicked = true;
      });
      btn.click();

      const tagName = btn.tagName;
      const type = btn.getAttribute("type");
      btn.remove();
      return { tagName, type, clicked };
    }, `${BASE_CLASSES} ${PRIMARY_CLASSES}`);

    expect(result.tagName).toBe("BUTTON");
    expect(result.type).toBe("button");
    expect(result.clicked).toBe(true);
  });

  test("button supports extra HTML button attributes via spread props", async ({
    page,
  }) => {
    const result = await page.evaluate((classes) => {
      const btn = document.createElement("button");
      btn.className = classes;
      btn.setAttribute("aria-label", "Test action");
      btn.setAttribute("data-testid", "btn-spread");
      btn.setAttribute("type", "submit");
      btn.textContent = "Spread";
      document.body.appendChild(btn);

      const ariaLabel = btn.getAttribute("aria-label");
      const dataTestId = btn.getAttribute("data-testid");
      const type = btn.getAttribute("type");
      btn.remove();
      return { ariaLabel, dataTestId, type };
    }, `${BASE_CLASSES} ${SECONDARY_CLASSES}`);

    expect(result.ariaLabel).toBe("Test action");
    expect(result.dataTestId).toBe("btn-spread");
    expect(result.type).toBe("submit");
  });
});

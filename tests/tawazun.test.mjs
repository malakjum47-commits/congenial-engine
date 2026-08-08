import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

// Production environment (GitHub Pages) for the "توازُن" (Tawazun) app.
// This is a static, RTL Arabic single-page app with no login, so there are
// no credentials/fixtures to supply — the tests exercise the public UI that
// renders on the live production page.
const APP_URL = "https://malakjum47-commits.github.io/congenial-engine/";

describe("Tawazun (توازُن) work-life balance app — production", () => {
  it("loads the dashboard with the welcome heading and balance stats", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: APP_URL });

    const dashboardVisible = await testdriver.assert(
      'The page displays the Arabic welcome heading "مرحباً بك، كيف حال توازنك اليوم؟" ' +
        'and the balance stats showing work hours "5.5 ساعة", rest breaks "3 استراحات", ' +
        'and family time "1.5 ساعة".',
    );
    expect(dashboardVisible).toBeTruthy();
  });

  it("shows the smart activity generator with three time-selection buttons", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: APP_URL });

    const generatorVisible = await testdriver.assert(
      'The activity generator section is visible with the heading containing ' +
        '"مولّد الأنشطة الأسرية الذكي" and three time-selection buttons labeled ' +
        '"15 دقيقة", "30 دقيقة", and "ساعة فأكثر".',
    );
    expect(generatorVisible).toBeTruthy();
  });

  it("shows the app branding and navigation at the top of the page", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: APP_URL });

    // The page ships without its external CSS, so the header renders as a
    // simple list near the top rather than a styled navbar — assert on the
    // text/content that is actually present.
    const brandingVisible = await testdriver.assert(
      'Near the top of the page, the "توازُن" logo/title is shown along with the ' +
        'links "لوحة التحكم", "مولد الأنشطة", "التذكيرات", and a ' +
        '"استراحة سريعة الآن" button.',
    );
    expect(brandingVisible).toBeTruthy();
  });
});

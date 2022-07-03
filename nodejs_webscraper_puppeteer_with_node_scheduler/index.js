const puppeteer = require("puppeteer");
const Scraper = require("./scrapers/class-based");
const Email = require("./utils/email");

/**
 * Run Standings
 */
(async () => {
  let browser;
  let page;

  try {
    browser = await puppeteer.launch({
      headless: true,
    });

    page = await browser.newPage();

    const partidos = await new Scraper(browser, page).main();

    // Make sure to uncomment the email code if you want to test out the email functionality.
    // Just remember to add your e-mail credentials in utils/email first.

    await Email.send(
      `<ul style="list-style:none;">
        ${partidos.map(
          ([day, competition, team1, time, team2, channels], i) =>
            `<li>${
              i + 1
            }: ${day} ${competition} ${team1} ${time} ${team2} ${channels}</li>`
        )}
      </ul>`.replace(/\,/g, "")
    );
  } catch (error) {
    console.log(error);
    await Email.send(error.stack, true);
  }

  await browser.close();
})();

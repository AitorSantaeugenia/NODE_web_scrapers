const writeFileSync = require("fs").writeFileSync;

class Scraper {
  constructor(browser, page) {
    this.browser = browser;
    this.page = page;

    this.matches = [];
    this.url = "https://www.futbolenlatele.com/";
  }

  async main() {
    await this.page.goto(this.url, { waitUntil: "domcontentloaded" });

    this.matches = await this.page.evaluate(() =>
      Array.from(document.querySelectorAll(".div_partido")).map((team) => [
        document.querySelector(".titulo2").innerHTML,
        team.querySelector(".div_campeonato > a").innerHTML,
        team.querySelector(".div_equipo1 > a").innerHTML,
        team.querySelector(".div_hora").innerHTML,
        team.querySelector(".div_equipo2 > a").innerHTML,
        team.querySelector(".div_cadena > span").innerHTML,
      ])
    );

    this.writeToJson();
    //console.log(this.matches);
    return this.matches;
  }

  writeToJson() {
    writeFileSync("./data/data.seed.json", JSON.stringify(this.matches));
  }
}

module.exports = Scraper;

const PORT = 3000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const url = "https://www.futbolenlatele.com/";

app.get("/", function (req, res) {
  res.json(
    "Webscraping https://www.futbolenlatele.com/ || add localhost:3000/scrapper to check results"
  );
});

app.get("/scrapper", (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const partidos = [];

      console.log(html);

      $(".partidos", html).each(function () {
        $(".div_partido", html).each(function () {
          const dia = $(this).prevUntil("h1").find("h3.titulo2").first().text();
          const banner = $(this)
            .find(".div_campeonato")
            .find("img")
            .attr("src");
          const campeonato = $(this).find(".div_campeonato").find("a").text();
          const equipo1 = $(this).find(".div_equipo1").find("a").text();
          let horapartido = $(this).find(".div_hora").text();
          const equipo2 = $(this).find(".div_equipo2").find("a").text();
          const canales = $(this).find(".div_cadena").find("span").text();

          partidos.push({
            dia,
            banner,
            campeonato,
            equipo1,
            horapartido,
            equipo2,
            canales,
          });
        });
      });

      console.log(partidos);
      res.json(partidos);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

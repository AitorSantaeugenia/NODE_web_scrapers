//Axios
const axios = require("axios");
//Cherio
const cheerio = require("cheerio");
//Express
const express = require("express");
const app = express();
//Cors
const cors = require("cors");

//file system node
//https://nodejs.org/api/fs.html
const fs = require("fs");

//PORT
const PORT = 3000;

app.use(cors());

const url = "https://www.futbolenlatele.com/";

app.get("/", function (req, res) {
  res.json(
    "Webscraping https://www.futbolenlatele.com/ || add localhost:3000/scraper to check results"
  );
});

app.get("/scraper", (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const partidos = [];

      //This console show the HTML format
      //console.log(html);

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

      //This console show what we get from the website
      //console.log(partidos);
      res.json(partidos);

      //After we got the data, we create a seed.js with it
      fs.writeFileSync("./data.seed.js", JSON.stringify(partidos));
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

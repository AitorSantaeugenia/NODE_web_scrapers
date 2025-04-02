# Web Scraper con Node.js, Axios y Cheerio

Este proyecto implementa un web scraper para extraer información de [futbolenlatele.com](https://www.futbolenlatele.com/) utilizando tecnologías modernas de Node.js.

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript
- **Express.js**: Framework web para Node.js
- **Axios**: Cliente HTTP para realizar peticiones
- **Cheerio**: Parser de HTML para extraer datos
- **CORS**: Middleware para habilitar Cross-Origin Resource Sharing

## 📦 Instalación

1. Clona el repositorio
2. Instala las dependencias:
```bash
npm install
```

## 🚀 Uso

1. Inicia el servidor:
```bash
npm start
# o
node index.js
```

2. Abre [http://localhost:3000/scraper](http://localhost:3000/scraper) en tu navegador
3. Los resultados del scraping se mostrarán en la terminal

## 📊 Resultados

El scraper genera un archivo `data.seed.js` que contiene los datos extraídos, que puede ser utilizado como una base de datos local.

### Comparación de Resultados

**Sitio Web Original:**  <br>
![Web data scraped](https://user-images.githubusercontent.com/14861253/177007945-8d224eb5-f966-4c3b-bd66-a28b80d23b97.png)

**Datos Extraídos:**  <br>
![Web data scraped](https://user-images.githubusercontent.com/14861253/177007928-66aa675b-df9c-40b7-848f-263f7f8444cd.png)

**Archivo data.seed.js Generado:**  <br>
![data.seed.js](https://user-images.githubusercontent.com/14861253/177024205-e2e8cd02-75a0-40e4-81c9-71cd9a87a461.png)

## 📚 Recursos Adicionales

- [Documentación de Express.js](https://expressjs.com/)
- [Documentación de Axios](https://axios-http.com/docs/intro)
- [Documentación de Cheerio](https://cheerio.js.org/)
- [Documentación de CORS](https://www.npmjs.com/package/cors)

---

<div align="center">
  <em>Este proyecto es un ejemplo educativo de implementación de web scraping</em>
</div>

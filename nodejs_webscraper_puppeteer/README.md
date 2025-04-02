# Web Scraper con Node.js y Puppeteer

Este proyecto implementa un web scraper avanzado para extraer información de [futbolenlatele.com](https://www.futbolenlatele.com/) utilizando Puppeteer, que permite la automatización de navegadores.

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript
- **Puppeteer**: Biblioteca para automatizar Chrome/Chromium
  - Permite renderizar contenido dinámico
  - Simula interacciones de usuario
  - Maneja JavaScript y AJAX

## 📦 Instalación

1. Clona el repositorio
2. Instala las dependencias:
```bash
npm install
```

## 🚀 Uso

1. Inicia el scraper:
```bash
npm start
# o
node index.js
```

2. El scraper generará automáticamente un archivo JSON con los datos extraídos

## 📊 Resultados

El scraper genera un archivo `data.seed.json` en la carpeta `./data/` que contiene los datos extraídos en formato JSON.

### Comparación de Resultados

**Sitio Web Original:**
![Web data scraped](https://user-images.githubusercontent.com/14861253/177007945-8d224eb5-f966-4c3b-bd66-a28b80d23b97.png)

**Datos Extraídos (JSON):**
![Web data scraped in a JSON](https://user-images.githubusercontent.com/14861253/177024167-45079d94-b099-47ba-ad6e-045ead2792aa.png)

## 📚 Recursos Adicionales

- [Documentación de Puppeteer](https://github.com/puppeteer/puppeteer#getting-started)
- [API de Puppeteer](https://github.com/puppeteer/puppeteer/blob/v2.1.1/docs/api.md)
- [NPM Package de Puppeteer](https://www.npmjs.com/package/puppeteer)

---

<div align="center">
  <em>Este proyecto es un ejemplo educativo de implementación de web scraping con automatización de navegador</em>
</div>

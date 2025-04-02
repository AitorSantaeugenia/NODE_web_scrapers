# Web Scraper Automatizado con Node.js

Este proyecto implementa un web scraper avanzado para extraer información de [futbolenlatele.com](https://www.futbolenlatele.com/) con programación automática y notificaciones por correo electrónico.

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript
- **Puppeteer**: Biblioteca para automatizar Chrome/Chromium
- **Nodemailer**: Sistema de envío de correos electrónicos
- **Node-schedule**: Programador de tareas para Node.js

## 📦 Instalación

1. Clona el repositorio
2. Instala las dependencias:
```bash
npm install
```

## ⚙️ Configuración de Correo Electrónico

Para usar Nodemailer con Gmail, necesitas configurar una contraseña de aplicación:

1. Ve a [Configuración de Seguridad de Google](https://myaccount.google.com/security)
2. Activa la autenticación de dos factores (2FA)
3. Crea una contraseña de aplicación:
   - Ve a [Contraseñas de aplicación](https://support.google.com/mail/answer/185833?hl=en)
   - Genera una nueva contraseña de 16 caracteres
4. Configura las credenciales en `/utils/email.js`:
   - Línea 2: Tu correo de Gmail
   - Línea 8: Tu contraseña de aplicación

> **Nota**: Google ya no soporta el uso de aplicaciones menos seguras que requieran solo usuario y contraseña.

## 🚀 Uso

1. Inicia el programador de tareas:
```bash
npm run schedule
# o
node utils/schedule.js
```

2. El scraper se ejecutará en los horarios programados
3. Los resultados se guardarán en `./data/data.seed.json`
4. Recibirás un correo electrónico con los resultados

## 📊 Resultados

### Proceso de Ejecución
![Web data scraped with a scheduler](https://user-images.githubusercontent.com/14861253/177058165-87d81492-de0b-4ab0-a1d6-06c3e5fb20fe.gif)

### Ejemplo de Correo Electrónico
![Email sent](https://user-images.githubusercontent.com/14861253/177057888-437c7ac0-739c-4170-8dc1-032329822ba1.png)

### Resultados del Scraping
![Email sent](https://user-images.githubusercontent.com/14861253/177058009-942e00cc-f44d-4ff8-9dca-625ace13f188.png)

## 📚 Recursos Adicionales

- [Documentación de Puppeteer](https://github.com/puppeteer/puppeteer#getting-started)
- [Documentación de Nodemailer](https://nodemailer.com/about/)
- [Documentación de Node-schedule](https://github.com/node-schedule/node-schedule)

---

<div align="center">
  <em>Este proyecto es un ejemplo educativo de implementación de web scraping automatizado con notificaciones</em>
</div>

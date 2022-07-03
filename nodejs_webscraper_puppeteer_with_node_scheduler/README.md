# Node webscraper with puppeteer, nodemailer & node-schedule

### Puppeteer
- https://github.com/puppeteer/puppeteer#getting-started
- https://github.com/puppeteer/puppeteer/blob/v2.1.1/docs/api.md
- https://www.npmjs.com/package/puppeteer

### Nodemailer
- https://nodemailer.com/about/
- https://www.npmjs.com/package/nodemailer

### Node-schedule
- https://github.com/node-schedule/node-schedule
- https://www.npmjs.com/package/node-schedule

<hr>

# Install dependencies
```bash
  "dependencies": {
    "node-schedule": "^2.1.0",
    "nodemailer": "^6.7.6",
    "puppeteer": "^15.3.0"
  }
```

1. Run this command
```bash
npm i
```

## A note about Nodemailer and third-party apps (less secured apps)

```
Google no longer supports the use of third-party apps or devices which ask you to sign in to your Google Account using only your username and password.

So now - CREDIT TO: https://stackoverflow.com/questions/72530276/nodemailergoogle-disabled-the-less-secure-app-option-on-google-accounts-i-woul:
1- https://myaccount.google.com/security
2- Enable 2FA
3- Create App Password for Email
   https://support.google.com/mail/answer/185833?hl=en
   (once you have done 2FA it appears below that option)
4- Copy that password (16 characters) into the pass parameter in Nodemailer auth.
*/
```

<hr>

# Run the scheduler

2. Run this command (at X time, will run the scraper)

```bash
npm run schedule
```
or

```bash
node utils/schedule.js
```

<hr>

# Check the data.seed.json created

3. After the webpage is scraped, it creates a file ./data/data.seed.json with the data scraped

<hr>

# Check your email

4. After the webpage is scraped, it sends you a email with the results too (or the error if there was one)

<div align="center">

![Email sent](https://user-images.githubusercontent.com/14861253/177057888-437c7ac0-739c-4170-8dc1-032329822ba1.png)

</div>

<div align="center">

![Email sent](https://user-images.githubusercontent.com/14861253/177058009-942e00cc-f44d-4ff8-9dca-625ace13f188.png)

</div>

```
You need to config that in the /utils/email.js file, line #2 (your-gmail) && line #8 (your-app-password)
```

<hr>
<br>

# Results
- Actual site <br>
![Web data scraped](https://user-images.githubusercontent.com/14861253/177007945-8d224eb5-f966-4c3b-bd66-a28b80d23b97.png)
<br>

- Process<br>
![Web data scraped with a scheduler](https://user-images.githubusercontent.com/14861253/177058165-87d81492-de0b-4ab0-a1d6-06c3e5fb20fe.gif)


<div align="center">

```
For testing purposes only :P
```

</div>

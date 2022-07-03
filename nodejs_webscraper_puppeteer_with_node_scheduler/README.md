# Node webscraper with puppeteer, nodemailer & node-schedule

## Install dependencies
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

<hr>

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

## Run the scheduler

2. Run this command (at X time, will run the scraper)

```bash
npm run schedule
```
or

```bash
node utils/schedule.js
```

## Check the data.seed.json created

3. After the webpage is scraped, it creates a file ./data/data.seed.json with the data scraped

## Check your email

4. After the webpage is scraped, it sends you a email with the results too

```
You need to config that in the /utils/email.js file, line #2 (your-gmail) && line #8 (your-app-password)
```

<br>

# Results
- Actual site <br>
![Web data scraped](https://user-images.githubusercontent.com/14861253/177007945-8d224eb5-f966-4c3b-bd66-a28b80d23b97.png)
<br>

- Data scraped from the site and saved in a JSON<br>
![Web data scraped in a JSON](https://user-images.githubusercontent.com/14861253/177024167-45079d94-b099-47ba-ad6e-045ead2792aa.png)


<div align="center">

```
For testing purposes only :P
```

</div>

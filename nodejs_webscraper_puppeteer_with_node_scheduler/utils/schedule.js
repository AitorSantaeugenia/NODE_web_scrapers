const spawn = require("child_process").spawn;
const schedule = require("node-schedule");

//min hour of the day - at 22:55 will start (55min 22hour)
//we have no data in /data folder and no email at 22:55
//from the scrap
schedule.scheduleJob("55 22 * * *", () => {
  console.log("Launching scraper.\n");
  spawn("node", ["index.js"]);
});

const { keyword } = require("./config");
const cheerio = require("cheerio");

module.exports = val => {
  // Return the helper message if the value equals "help"
  if (val === "help")
    return "\nUsage: `" + keyword + " <search term, e.g. express>`";
  // Scrape the content
  const html = cheerio.load(val);
  const data = {
    name: html("span._50685029").text(),
    desc: html("p.package-description-redundant").text() || "",
    link: html("a.b2812e30").attr("href") || "",
    weeklyDownloads: html("p._9ba9a726").text() || "",
    lastPublish: html("time").text()
  };
  return (
    `https://npmjs.com/package/${data.name}` +
    "\n```md\n" +
    `\n${data.desc}\nWeekly Downloads: ${
      data.weeklyDownloads
    }\nLast Publish: ${data.lastPublish.substr(
      0,
      data.lastPublish.length / 2
    )}\n\n${data.link}` +
    "\n```\n"
  );
};

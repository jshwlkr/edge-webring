const now = new Date();
const timeZone = "UTC";
const buildTime = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "short",
  timeZone,
}).format(now);

export default {
    title: "Example Webring",
    description: "Example webring",
    url: "https://edgewebring.netlify.app/",
    timestamp: {
        raw: now.toISOString(),
        formatted: `${buildTime} ${timeZone}`,
    },
    env: process.env.ELEVENTY_RUN_MODE,
};
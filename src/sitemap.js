import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const hostname = "https://billing.magicscale.in";
const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
];

const sitemapStream = new SitemapStream({ hostname });

urls.forEach((url) => sitemapStream.write(url));
sitemapStream.end();

streamToPromise(sitemapStream).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());
});

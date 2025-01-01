import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";

const scrape = express.Router();

scrape.get("/", async (req, res) => {
  const url = "https://blog.magicscale.in";

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const blogs = [];

    $("article").each((ind, element) => {
      const title = $(element).find(".pCntn").find("h2").find("a").text();

      const imgSrc =
        $(element).find("img").attr("data-src") ||
        $(element).find("img").attr("src");

      const link = $(element).find("a").attr("href");

      const date = $(element)
        .find(".pCntn")
        .find("time")
        .attr("data-text")
     

      const description = $(element)
        .find(".pCntn")
        .find(".pSnpt")
        .text()
        .trim();

      if (title && imgSrc) {
        blogs.push({
          image: imgSrc,
          title: title,
          link: link,
          date: date,
          description: description,
        });
      }
    });

    res.status(200).json({success : true , blogs });
  } catch (err) {
    console.error("Scraping error:", err.message);
    res
      .status(500)
      .json({ success : false , message: "Failed to scrape the website", error: err.message });
  }
});

//www.justdial.com/Delhi/Restaurants/nct-10408936?trkid=3186-delhi&term=resta
scrape.get("/just", async (req, res) => {
  const url =
    "www.justdial.com/Delhi/Restaurants/nct-10408936?trkid=3186-delhi&term=resta";

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const blogs = [];

    $("main").each((ind, element) => {
      console.log($(element).html());
    });

    res.status(200).json({ success: true, blogs });
  } catch (err) {
    console.error("Scraping error:", err.message);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to scrape the website",
        error: err.message,
      });
  }
});

export default scrape;

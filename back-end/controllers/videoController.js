const axios = require("axios");
const NodeCache = require("node-cache");
const { Service } = require("../services/videosService");
const axiosInstance = axios.create({
  baseURL: "https://challenge.lexicondigital.com.au/api/v2/",
  timeout: 10000,
  headers: { "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7" },
});

const myCache = new NodeCache({
  stdTTL: 100,
  checkperiod: 120,
  deleteOnExpire: false,
});

const CINEMAWORLD_VIDEO_LIST_KEY = "cinemaworld_video_list";
const CINEMAWORLD_API = "/cinemaworld/movies";

const FILMWORLD_VIDEO_LIST_KEY = "filmworld_video_list";
const FILMWORLD__API = "/filmworld/movies";

exports.getVideoList = async (req, res) => {
  try {
    //GET CINEMA WORLD VIDEO LIST from Cache
    //This is just for example, should save in Redis cache for more stable cache
    let cinemaVideoList = myCache.get(CINEMAWORLD_VIDEO_LIST_KEY);
    let cinemaVideoListTTL = myCache.getTtl(CINEMAWORLD_VIDEO_LIST_KEY);
    let result;
    const currentTimeStamp = new Date().getTime();
    if (
      !cinemaVideoList ||
      (cinemaVideoListTTL && cinemaVideoListTTL < currentTimeStamp)
    ) {
      //If Expired or not exist, request two 3rd party API
      const result = await Service.list(CINEMAWORLD_API).catch(() => {});
      if(result) {
        myCache.set(CINEMAWORLD_VIDEO_LIST_KEY, result, 100);
        cinemaVideoList = result;
      }
    }

    //GET FILM WORLD VIDEO LIST
    let filmWorldVideoList = myCache.get(FILMWORLD_VIDEO_LIST_KEY);
    let filmWorldVideoListTTL = myCache.getTtl(FILMWORLD_VIDEO_LIST_KEY);
    if (
      !filmWorldVideoList ||
      (filmWorldVideoListTTL && filmWorldVideoListTTL < currentTimeStamp)
    ) {
      //Expired or not exist
      const result = await Service.list(FILMWORLD__API).catch(() => {});
      if(result) {
        myCache.set(FILMWORLD_VIDEO_LIST_KEY, result, 100);
        filmWorldVideoList = result;
      }
    }

    //If not have any data, returl empty []
    if (!cinemaVideoList && !filmWorldVideoList) {
      res.status(201).json({ data: [] });
    } else {
      //return object have price comparisons data
      if (cinemaVideoList) {
        result = cinemaVideoList.map((cinemaWorldVideo) => ({
          ...cinemaWorldVideo,
          cinemaWorldPrice: cinemaWorldVideo.Price,
          filmWorldPrice: filmWorldVideoList
            ? filmWorldVideoList.find(
                (filmWorldVideo) =>
                  filmWorldVideo.ID.slice(2) === cinemaWorldVideo.ID.slice(2)
              )?.Price
            : null,
        }));
      } else {
        result = filmWorldVideoList.map((filmWorldVideo) => ({
          ...filmWorldVideo,
          filmWorldPrice: filmWorldVideo.Price,
          cinemaWorldPrice: null,
        }));
      }

      res.status(201).json({ data: result });
    }
  } catch (error) {
    console.error("[ERROR] getVideoList", error);
    res.status(500);
    throw new Error("getVideoList failed");
  }
};


const { Service } = require("../services/videosService");
const videoController = require("../controllers/videoController");
const { mockResponse, mockRequest } = require("./mock");
jest.mock("../services/videosService");
const CINEMA_WORLD_TEMP_DATA = [
  {
    ID: "cw2488496",
    Title: "Star Wars: Episode VII - The Force Awakens",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    Actors: "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
    Price: 24.7,
  },
];

const FILM_WORLD_TEMP_DATA = [
  {
    ID: "fw2488496",
    Title: "Star Wars: Episode VII - The Force Awakens",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    Actors: "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
    Price: 25,
  },
];

const EXPECTED_DATA = [
  {
    ID: "cw2488496",
    Title: "Star Wars: Episode VII - The Force Awakens",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    Actors: "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
    Price: 24.7,
    cinemaWorldPrice: 24.7,
    filmWorldPrice: 25,
  },
];


beforeEach(() => {
    jest.resetAllMocks();
})
describe("Videos Controller", () => {

test("should test getVideoList - get VIDEOS API failed with no cache", async () => {
    const error = new Error();
    const videoList = { data: [] };
    Service.list
      .mockImplementationOnce(() => Promise.reject(error))
      .mockImplementationOnce(() => Promise.reject(error));
    const res = mockResponse();
    await videoController.getVideoList(null, res);
    expect(res.json).toBeCalledWith(videoList);
    expect(res.status).toBeCalledWith(201);
  });
  test("should test getVideoList - get VIDEOS API success", async () => {
    const cinemaVideoList = { data: CINEMA_WORLD_TEMP_DATA };
    const filmVideoList = { data: FILM_WORLD_TEMP_DATA };
    Service.list
      .mockImplementationOnce(() => Promise.resolve(cinemaVideoList.data))
      .mockImplementationOnce(() => Promise.resolve(filmVideoList.data));
    const res = mockResponse();
    await videoController.getVideoList(null, res);
    expect(res.json).toBeCalledWith({ data: EXPECTED_DATA });
    expect(res.status).toBeCalledWith(201);
  });

});

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const video = require("./routes/video");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/videos", video);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './dist')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname,'dist', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('Hello!!!')
  })
}

const PORT = process.env.NODE_ENV === 'production' ? 8080 : 3001;
app.listen(PORT);
console.log(`Express started on port ${PORT}`);

const router = require("express").Router();
const upload = require("./storage");
const fs = require("fs");
const path = require("path");
const async = require("async");
const model = require("./dbConnect");

let dirPath = "./assets";

router.post("/post", upload.single("file"), (req, res) => {
  model.find((err, posts) => {
    if (err) return err;
    let id = posts.length;

    let post = new model({ id: id, description: req.body.description });

    post.save((err) => {
      if (err) return handleError(err);
      res.sendStatus(200);
    });
  });
});

router.get("/post", (req, res) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return callback(err);
    }

    let filePaths = [];

    async.eachOf(files, (fileName, key) => {
      let filePath = path.join("post", fileName);
      filePaths.push({ id: key, url: filePath });
    });

    res.send(filePaths.reverse());
  });
});

router.get("/post/:postid", (req, res) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return callback(err);
    }

    async function getPost() {
      let filePaths = [];

      for (let i = 0; i < files.length; i++) {
        let id = i;
        let filePath = files[i];
        let post = await model.findOne({ id: i }, "description").exec();
        filePaths.push({ id: id, url: filePath, description: post.description });
      }

      for (let i = 0; i < filePaths.length; i++) {
        if (req.params.postid == filePaths[i].id) {
          res.send(filePaths[i]);
        }
      }
    }

    getPost();
  });
});

module.exports = router;

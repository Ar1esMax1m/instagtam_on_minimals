const router = require("express").Router();
const upload = require("./storage");
const fs = require("fs");
const path = require("path");
const async = require("async");
const model = require("./dbConnect");

router.post("/addPost", upload.single("file"), (req, res, next) => {
  model.find((err, posts) => {
    if (err) return err;
    let id = posts.length;

    let post = new model({ id: id, title: req.body.des });
    post.save((err) => {
      if (err) return handleError(err);
      res.sendStatus(200);
    });
  });
});

let dirPath = "./assets";

router.get("/getPost", (req, res) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return callback(err);
    }

    let filePaths = [];

    async.eachOf(files, (fileName, key) => {
      let filePath = path.join("getPost", fileName);
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
        let des = await model.findOne({ id: i }, "title").exec();
        filePaths.push({ id: id, url: filePath, des: des.title });
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

const mongoose = require("mongoose");
const Comment = mongoose.model("comment");

API_ENDPOINT = process.env.API_ENDPOINT || 'localhost:5000'

module.exports = app => {
  app.get("http://" + API_ENDPOINT + "/api/comments", async (req, res) => {
    // ใช้สำหรับหน้าดูรถทั้งหมด
    const comments = await Comment.find({});
    console.log("BACKEND GET")
    res.send(comments);
  });
  app.post("http://" + API_ENDPOINT + "/api/comments", async (req, res) => {
    // ใช้สำหรับหน้าดูรถทั้งหมด
    const {author, text} = req.body
    const comment = await new Comment({
        author,
        text
    }).save()
    console.log("BACKEND POST")
    console.log(comment)
    res.status(200).send(comment)
  });
};

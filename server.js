const express = require ("express");
const hbs = require("hbs");
const multer = require("multer");
const upload = multer({ dest: "uploads/"});
const bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("index");
});

app.post("/", upload.single("file"), (req, res, next) => {
	res.send(`Your file is ${req.body.file.size} bytes.`);
});


app.listen(port, () => {
	console.log("listening on port:" + port)
})


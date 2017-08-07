const express = require ("express");
const hbs = require("hbs");
const multer = require("multer");
const upload = multer({ dest: "uploads/"});
const bodyParser = require('body-parser');

var port = 3000;

const app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("index");
});

app.post("/", upload.single("file"), (req, res, next) => {
	return res.json(req.file.size);
})


app.listen(port, () => {
	console.log("listening on port:" + port)
})


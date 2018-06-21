const express = require("express");
const path = require("path");
const app = express();

const port = 9108;

app.use("/static", express.static(path.join(__dirname, "../../public/static")));
app.use("/", express.static(path.join(__dirname, "../../public")));

app.get("/", (req, res) =>
	res.sendFile(require.resolve(__dirname + "/../../public/index.html"))
);

app.listen(port, () =>
	console.log("Listening on" + " http://127.0.0.1:" + port)
);

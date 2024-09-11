const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build");

app.use(express.static(buildPath));
app.use(express.json()); // To parse JSON bodies

// Enable CORS for all routes
app.use(cors());

app.get("/*", function (req, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    );
});

// Import and use the HubSpot router
const hubspotRouter = require("./routes/contact/contact.js");
app.use("/api/contact", hubspotRouter);

server.listen(5001, () => console.log("Listening to port 5001"));

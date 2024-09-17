const appRoot = require("app-root-path");

const fs = require("fs");
const accessLogStream = fs.createWriteStream(
    `${appRoot}/log/access.log`,
    // "../../log/access.log",
    { flags: "a" },
);

module.exports = accessLogStream;
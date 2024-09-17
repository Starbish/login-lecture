const { createLogger, transports, format } = require("winston");
const { combine, colorize, timestamp, simple, json, printf, label } = format;

const printFormat = printf(({ timestamp, level, message, label }) => {
    return `${timestamp} [${label}] ${level} : ${message}`;
});
const printLogFormat = { 
    file: combine(
        label({
            label: "백엔드 맛보기"
        }),
        // colorize(),
        timestamp({
            format: "YYYY-MM-DD HH:mm:dd"
        }),
        // simple(),
        // json(),
        printFormat,
    ),

    console: combine(
        colorize(),
        simple()
    ), 
};

const options = {
    file: new transports.File({
        dirname: "./logs",
        filename: "access.log",
        level: "info",
        format: printLogFormat.file,
    }),

    console: new transports.Console({
        level: "info",
        format: printLogFormat.console,
    }),
};

const logger = createLogger({
    transports: [options.file],
});

if(process.env.NODE_ENV !== "production") {
    logger.add(options.console)
}


module.exports = logger;
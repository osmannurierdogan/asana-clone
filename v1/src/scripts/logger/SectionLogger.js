const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "SectionService" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/SectionLogs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/SectionLogs/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/SectionLogs/combined.log",
    }),
  ],
});

module.exports = logger;
//
// if (process.env.NODE_ENV !== "production") {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.simple(),
//     })
//   );
// }

const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "ProjectService" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/ProjectLogs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/ProjectLogs/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/ProjectLogs/combined.log",
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

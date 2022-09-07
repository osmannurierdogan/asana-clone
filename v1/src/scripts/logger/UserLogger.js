const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "UserService" },
  transports: [
    new winston.transports.File({
      filename: "src/logs/UserLogs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "src/logs/UserLogs/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "src/logs/UserLogs/combined.log",
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

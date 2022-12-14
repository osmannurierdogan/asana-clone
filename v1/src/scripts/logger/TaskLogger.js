const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "TaskService" },
  transports: [
    new winston.transports.File({
      filename: "src/logs/TaskLogs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "src/logs/TaskLogs/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "src/logs/TaskLogs/combined.log",
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

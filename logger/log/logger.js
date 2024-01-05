const {createLogger,transports, format} = require('winston')

const customFormat = format.combine(format.timestamp(),format.printf((obj)=>{
    return `[${obj.timestamp}]<----->[${obj.level.toUpperCase().padEnd(7)}]<----->${obj.message}`
}))

const logger = createLogger({
     format: customFormat//format.printf((obj)=>{
    //     return `[${obj.level.toUpperCase().padEnd(7)}]<--->${obj.message}`
    // }),
    ,
    level:"silly",
    transports :[
        new transports.Console(),
        new transports.File({filename:"app.log",level:"error"})
    ]
});

logger.error("Error")
logger.warn("Warn")
logger.info("Info") // defualt level
logger.verbose("Verbose")
logger.debug("Debug")
logger.silly("silly")
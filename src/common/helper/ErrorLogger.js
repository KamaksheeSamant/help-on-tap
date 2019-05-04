
// You can also log the error to an error reporting service
// i am just logging it to console for now 

const msgFormatter= (msg) => msg.reduce((acc = "", currentValue)=>`${acc} ${JSON.stringify(currentValue)} >> `)
export const logError = (...msg) => {
    console.error("ERR: ", msgFormatter(msg));
}
export const logInfo = (...msg) => {
    console.info("INFO: ", msgFormatter(msg));
}
export const logMsg = (...msg) => {
    console.log("LOG: ", msgFormatter(msg));
}
export const logWarn = (...msg) => {
    console.warn("WARN: ", msgFormatter(msg));
}
export default logMsg;


const cors_proxy = require('cors-anywhere')

const host = process.env.HOST;
const port = process.env.PORT;

cors_proxy.createServer({
    originWhitelist: [],
}).listen(port, host, function () {
    console.log(`Running cors-anywhere on ${host}:${port}`)
})
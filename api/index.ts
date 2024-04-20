import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io'
import bodyParser from 'body-parser';
import http from 'http';
import timeout from 'connect-timeout';
import { routerApi } from './router';
import { errorHandler, logErrors } from './middlewares/error.handler';
import { config } from 'dotenv';

config()
const app = express()
app.use(timeout('360s'))

const server = http.createServer(app);

app.use(cors())

app.use(function (_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(
    bodyParser.json({
        verify: function (req, res, buf) {
            //@ts-ignore
            req.rawBody = buf;
        },
        limit: '500mb'
    })
);

export const io = new Server(server, {
    cors: {
        origin: "*"
    }
})
io.on('connection', (socket) => {
    console.log('a user connected', socket);

});

routerApi(app)

app.use(logErrors)
app.use(errorHandler)

const initAPI = () => {
    server.listen(process.env.PORT, () => {
        console.log('Pochtli API running on port: ' + process.env.PORT);
    })
}

initAPI()
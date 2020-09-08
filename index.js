import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';

import logger from './src/utils/logger';
import routes from './src/routes';
import genericErrorHandler from './src/middlewares/genericErrorHandler';

const appPort  = 1234;

const loggingMiddleware = (req, res, next) => {
    const url = req.url;
    const method = req.method;

    logger.info(`${method} ${url}`)
    // console.log(`[${new Date().toISOString()}] [${method}] ${url} \n`)
    next();
}

const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(loggingMiddleware);
app.use(routes);
app.use(genericErrorHandler);  // sabai error haru last ma aayera accumulate bhayera bascha

dotenv.config();                //injects everything from .env file
// console.log('env app_port',process.env.APP_PORT);

app.listen(process.env.PORT, () => {
    logger.info(`Listening on port ${process.env.PORT}`);
});
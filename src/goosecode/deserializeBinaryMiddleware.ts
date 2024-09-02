import {Request, Response, NextFunction} from 'express';
import {deserializeBinary} from '../util';

function deserializeBinaryMiddleware(req: Request, res: Response, next: NextFunction) {
    const request = deserializeBinary(req.body);
    if (request === null) {
        res.status(500).send("Failed to deserialize binary data");
        return;
    }
    req.body = request;
    next();
}

export {deserializeBinaryMiddleware};
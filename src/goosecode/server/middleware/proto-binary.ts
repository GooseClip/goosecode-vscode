import {Request, Response, NextFunction} from 'express';
import {deserializeBinary} from '../../../util';
import {ApiError} from "../../errors";

function convertBodyToProtoMiddleware(req: Request, res: Response, next: NextFunction) {
    const request = deserializeBinary(req.body);
    if (request === null) {
        res.status(500).send("Failed to deserialize binary data");
        next(new ApiError("Failed to deserialize binary data"));
        return;
    }
    req.body = request;
    next();
}

export {convertBodyToProtoMiddleware};
import {Request, Response, NextFunction} from 'express';
import {deserializeBinary} from '../../../util';
import {ApiError} from "../../errors";

function convertBodyToProtoMiddleware(req: Request, res: Response, next: NextFunction) {
    const request = deserializeBinary(req.body);
    if (request === null) {
        next(new ApiError("Failed to deserialize binary data", 500));
        return;
    }
    req.body = request;
    next();
}

export {convertBodyToProtoMiddleware};
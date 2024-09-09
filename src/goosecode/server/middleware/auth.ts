import {Request, Response, NextFunction} from 'express';
import {deserializeBinary} from '../../../util';
import {ApiError} from "../../errors";

function authMiddleware(req: Request, res: Response, next: NextFunction, password: string) {
    if(req.headers.authorization !== password){
        next(new ApiError("Unauthorized", 401));
        return;
    }
    next();
}

export {authMiddleware};
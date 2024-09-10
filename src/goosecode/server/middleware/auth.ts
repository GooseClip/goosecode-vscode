import {Request, Response, NextFunction} from 'express';
import {deserializeBinary} from '../../../util';
import {ApiError} from "../../errors";

function authMiddleware(req: Request, res: Response, next: NextFunction, password: string) {
    if (req.path === "/connect/.websocket") {
        next();
        return;
    }

    if(req.headers.authorization !== password){
        next(new ApiError(`Unauthorized, path: ${req.path}`, 401));
        return;
    }
    next();
}

export {authMiddleware};
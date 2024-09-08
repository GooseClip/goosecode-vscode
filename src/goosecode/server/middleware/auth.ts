import {Request, Response, NextFunction} from 'express';
import {deserializeBinary} from '../../../util';
import {ApiError} from "../../errors";

function authMiddleware(req: Request, res: Response, next: NextFunction, password: string) {
    if(req.headers.authorization !== password){
        res.status(401).send("Unauthorized");
        next(new ApiError("Unauthorized"));
        return;
    }
    next();
}

export {authMiddleware};
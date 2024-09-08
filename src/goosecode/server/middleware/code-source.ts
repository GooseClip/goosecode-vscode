import { Request, Response, NextFunction } from "express";
import { idepb } from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import { CodeSourceID } from "../../../config";
import { ApiError } from "../../errors";

function checkCodeSourceMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
  codeSourceID: CodeSourceID,
) {
  if (req.path === "/connect/.websocket") {
    next();
    return;
  }

  const msg = req.body as RequestMessage;
  if (msg.code_source_id !== codeSourceID && req.path !== "/code-source-id") {
    res.status(422).send("CodeSource no longer active");
    next(new ApiError("CodeSource no longer active"));
    return;
  }

  next();
}

export { checkCodeSourceMiddleware };

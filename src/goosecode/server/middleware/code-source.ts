import { Request, Response, NextFunction } from "express";
import { idepb } from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import { CodeSourceID } from "../../../config";
import { ApiError } from "../../errors";

function checkCodeSourceMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
  getCodeSourceID: () => (CodeSourceID | null),
) {
  if (req.path === "/connect/.websocket") {
    next();
    return;
  }

  const msg = req.body as RequestMessage;
  const codeSourceID = getCodeSourceID();
  if (!codeSourceID || (msg.code_source_id !== codeSourceID && req.path !== "/code-source-id")) {
    next(new ApiError("CodeSource no longer active", 422));
    return;
  }

  next();
}

export { checkCodeSourceMiddleware };

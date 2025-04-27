// import { Request, Response, NextFunction } from "express";
// import { CodeSourceID } from "../../../config";
// import { ApiError } from "../../errors";

// import { goosecode } from "../../../proto/ide/ide";

// import RequestMessage = goosecode.v2.app.source.ide.RequestMessage;


// function checkCodeSourceMiddleware(
//   req: Request,
//   res: Response,
//   next: NextFunction,
//   getCodeSourceID: () => (CodeSourceID | null),
// ) {
//   if (req.path === "/connect/.websocket") {
//     next();
//     return;
//   }

//   const msg = req.body as RequestMessage;
//   const codeSourceID = getCodeSourceID();
//   if (!codeSourceID || (msg.repository_snapshot_fingerprint !== codeSourceID && req.path !== "/code-source-id")) {
//     next(new ApiError("CodeSource no longer active", 422));
//     return;
//   }

//   next();
// }

// export { checkCodeSourceMiddleware };

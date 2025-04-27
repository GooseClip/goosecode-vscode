// app.use((r, q, n) => checkCodeSourceMiddleware(r, q, n, ()=>this.codeSourceID()));

// app.post(
//   "/files-list",
//   async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction,
//   ) => {
//     await handleListFilesRequest(req.body, (m) => this.send(res, m)).catch(
//       (e) => next(e),
//     );
//   },
// );

// app.post(
//   "/files-open",
//   async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction,
//   ) => {
//     await handleOpenFilesRequest(req.body, (m) => this.send(res, m)).catch(
//       (e) => next(e),
//     );
//   },
// );

// app.post(
//   "/find-string",
//   async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction,
//   ) => {
//     await handleFindRequest(req.body, (m) =>
//       this.send(res, m),
//     ).catch((e) => next(e));
//   },
// );

// app.post(
//   "/range-select",
//   async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction,
//   ) => {
//     await handleSelectRange(req.body, (m) =>
//       this.send(res, m),
//     ).catch((e) => next(e));
//   },
// );

// app.post(
//   "/range-describe",
//   async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction,
//   ) => {
//     await handleDescribeRange(req.body, (m) =>
//       this.send(res, m),
//     ).catch((e) => next(e));
//   },
// );

// app.post(
//   "/rename",
//   async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction,
//   ) => {
//     await handleRename(req.body, (m) =>
//       this.send(res, m),
//     ).catch((e) => next(e));
//   },
// );

// app.post(
//   "/find-uses",
//   async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction,
//   ) => {
//     await handleFindUses(req.body, (m) =>
//       this.send(res, m),
//     ).catch((e) => next(e));
//   },
// );

// app.post(
//   "/editor-state",
//   async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction,
//   ) => {
//     await handleGetEditorState(req.body, (m) => this.send(res, m)).catch(
//       (e) => next(e),
//     );
//   },
// );

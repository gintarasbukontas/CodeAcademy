export function errMiddleWare(err, req, res, next) {
  if (err) {
    res.status(400).json({ err: "kazkas blogai" });
  }

  next();
}

const jwt = require("jsonwebtoken");

function protect(req, res, next) {
  const authorization = req.headers.authorization || "";
  const bearerToken = authorization.startsWith("Bearer ")
    ? authorization.slice(7)
    : null;
  const token = req.cookies?.token || bearerToken;

  if (!token) {
    return res.status(401).json({ message: "Authentication is required." });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: "JWT_SECRET is not configured." });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const userId = payload.id || payload._id || payload.userId || payload.sub;

    if (!userId) {
      return res.status(401).json({ message: "Invalid authentication token." });
    }

    req.user = { ...payload, id: userId };
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired authentication token." });
  }
}

module.exports = { protect };

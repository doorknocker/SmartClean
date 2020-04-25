var jwt = require("jwt-simple");

const secret = process.env.SECRET || "YOUR_SECRET_STRING";

module.exports = (req, res, next) => {
  var token =
    (req.body && req.body.access_token) ||
    (req.query && req.query.access_token) ||
    req.headers["x-access-token"];
  if (token) {
    try {
      var decoded = jwt.decode(token, secret);

      if (decoded.exp <= Date.now()) {
        return res.status(400).send("Access token has expired");
      }
      next();
    } catch (err) {
      return res.status(400).send("Access token in invalid");
    }
  } else {
    return res.status(400).send("Access token not provided");
  }
};

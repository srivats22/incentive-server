const { getAuth } = require("firebase-admin/auth");

exports.getUserBasedOnEmail = (req, res) => {
  const { reqEmail } = req.query;
  getAuth()
    .getUserByEmail(reqEmail)
    .then((userRecord) => {
      res.status(200).send(userRecord);
    })
    .catch((err) => {
      res.status(err.code).send({
        error: err,
      });
    });
};

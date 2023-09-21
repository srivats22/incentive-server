const { getAuth } = require("firebase-admin/auth");
const { getFirestore } = require("firebase-admin/firestore");

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

exports.getUserInfo = async (req, res) => {
  const { uuid } = req.query;
  const holder = []
  var dataRef = await getFirestore()
  .collection("users")
  .where("watchUUID", "==", uuid)
  .get();

  dataRef.forEach((doc) => {
    holder.push(doc.data())
  })

  if(holder.length !== 0){
    res.status(200).send(holder);
  }
  else{
    res.send("An error occured");
  }
}

exports.getTodaysTask = async (req, res) => {
  const { userId } = req.query;
  const holder = [];
  const today = new Date();
  const dataRef = await getFirestore()
  .collection("users")
  .doc(userId).collection("tasks")
  .where("due", "==", `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`)
  .get();

  dataRef.docs.forEach((d) => {
    holder.push(d.data())
  })

  if(holder.length !== 0){
    res.status(200).send(holder);
  }
  else{
    res.status(200).send("No Data");
  }
}


exports.testApi = async (req, res) => {
  console.log(req.originalUrl);
  res.status(200).send("Recived");
}

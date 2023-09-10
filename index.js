const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require('dotenv').config()

var admin = require("firebase-admin");
var serviceJson = {
    "type": process.env.REACT_TYPE,
    "project_id": process.env.REACT_PROJECTID,
    "private_key_id": process.env.REACT_PRIVATE_KEY_ID,
    "private_key": process.env.REACT_PRIVATE_KEY,
    "client_email": process.env.REACT_CLIENT_EMAIL,
    "client_id": process.env.REACT_CLIENT_ID,
    "auth_uri": process.env.REACT_AUTH_URI,
    "token_uri": process.env.REACT_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.REACT_AUTH_PROVIDER_x509_CERT_URL,
    "client_x509_cert_url": process.env.REACT_CLIENT_X509_CERT_URL,
    "universe_domain": process.env.UNIVERSE_DOMAIN
}

admin.initializeApp({
    credential: admin.credential.cert(serviceJson),
    storageBucket: "gs://experimentswithsri.appspot.com",
    databaseURL: 'https://experimentswithsri-default-rtdb.firebaseio.com/'
})

var corsOptions = {
    origin: '*'
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 4000;
const http = require('http').Server(app);

require('./app/route/routes.js')(app)

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
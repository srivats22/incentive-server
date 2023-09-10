const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require('dotenv').config()

var admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert('serviceAccount.json'),
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

http.keepAliveTimeout = 120 * 1000;
http.headersTimeout = 120 * 1000;
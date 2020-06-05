/*
var firebase = require('firebase/app')
var firestore = require('firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyDC5hRgGLL5PnDN3ysBNnIGAkAjUIrEIDQ",
    authDomain: "assignmment.firebaseapp.com",
    databaseURL: "https://assignmment.firebaseio.com",
    projectId: "assignmment",
    storageBucket: "assignmment.appspot.com",
    messagingSenderId: "431154107897",
    appId: "1:431154107897:web:17349c3ab382d32cb79928"
};
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

exports.getData = function (req, res) {
    const docref = firestore.collection("locations").doc("cityNames")
    var city = req.query.city;
    if ((city === null) || (typeof (city) === 'undefined')) {
        res.status(400).send('Failed to get the data');
    }
    docref.get().then(function (doc) {
        if (doc && doc.exists) {
            if (doc.data().name == city) {
                console.log("city is " + city)
                return res.status(200).send(doc.data().name);
            }
            else {
                return res.status(400).send({ msg: 'Failed' });
            }
        }
        return res.status(400).send({ msg: 'Failed' });
    }).catch(function(error) {
        console.log("error here", error)
    })

}; */


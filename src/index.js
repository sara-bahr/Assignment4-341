import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
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
const docref = firestore.collection("locations").doc("cityNames")
var element = document.getElementById("map");
element.onclick = function(){
    if(localStorage.getItem("store")!=null){
        console.log(localStorage.getItem("store"))
        docref.set({
            name: localStorage.getItem("store")
        }).then(function(){
            docref.set({
                name: localStorage.getItem("store")
            })
            console.log(localStorage.getItem("store"))
        }).catch(function(error) {
            console.log("error here", error)
        })
    }
}



docref.get().then(function(doc) {
    if(doc && doc.exists) {
        localStorage.setItem("data", doc.data().name);
        console.log(doc.data().name + " retrieved");
        //localStorage.setItem("store", doc.data().name)
        document.getElementById("city").textContent = doc.data().name
        handleCityChange(doc.data().name)
    }
    
})

var handleCityChange = async (cityName) => {



    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${cityName},nz`)
    const json = await res.json()
    // console.log(json);

    var table = document.getElementsByClassName("table")[0]
    ///  console.log(table)
    if (json.cod === 200) {
        document.cookie = json.name;
        let rows = [{
            "name": "City",
            "index": json.name
        },
        {
            "name": "Temperature",
            "index": json.main.temp
        },
        {
            "name": "Pressure",
            "index": json.main.pressure
        },
        {
            "name": "Humidity",
            "index": json.main.humidity
        },
        {
            "name": "Min Temperature",
            "index": json.main.temp_min
        },
        {
            "name": "Max Temperature",
            "index": json.main.temp_max
        },
        {
            "name": "Condition",
            "index": json.weather[0].description
        }
        ];
        table.innerHTML = "";
        for (var i = 0; i < rows.length; i++) {
            var row1 = table.insertRow();
            var cell1 = row1.insertCell();
            var cell2 = row1.insertCell();
            cell1.innerHTML = rows[i].name;
            cell2.innerHTML = rows[i].index;
        }
    }
    else {
        table.innerHTML = "";
        table.innerHTML = json.message;
    }
}

// Initialize Firebase


ReactDOM.render(<App />, document.getElementById('root'));


import React from 'react';
import './App.css';
import SkipWaitButton from "./SKipWaitButton";


if ('Notification' in window) {
    Notification.requestPermission()
        .then((permission) => {
            if (permission === 'granted') {
                alert("GRANTED")
            } else if (permission === 'denied') {
            }
        })
        .catch((error) => {
            console.error('Fout bij het aanvragen van toestemming voor meldingen:', error);
        });
}

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log('Huidige locatie (coords) :', latitude, longitude);
    }, function(error) {
        console.log('Fout bij het ophalen van de locatie (locatie toestaan in instellingen) :', error);
    });
} else {
    console.log('Geolocation wordt niet ondersteund door de browser, probeer chrome!');
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then((registration) => {
                console.log('Service Worker geregistreerd:', registration);
            })
            .catch((error) => {
                console.error('Fout bij het registreren van de Service Worker:', error);
            });
    });
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Skip wait button</p>
                <SkipWaitButton/>
                <p style={{paddingTop: "5px"}}>CACHED IMAGE</p>
                <img src={"/cached.png"} alt={"beschrijving"}></img>
            </header>
        </div>
    );
}

export default App;

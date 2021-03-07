import  Navigation  from './components/navigation';
import React from 'react';
import './App.css';
import { Routers } from './Routers';
import firebase from './FireBaseWork/firebase';
function App() {
  const messaging=firebase.messaging();
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
  
    })
  return (
    <div>
      <Navigation/>
      
      <Routers/>
    
    </div>
  );
}

export default App;

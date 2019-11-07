import { firebaseapp, providerApp } from "./firebase"

function getUser() {
  return new Promise((resolve, reject) => {

    fetch('https://opentdb.com/api.php?amount=10')
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  }
  )

}


function loginfacebook() {
  return new Promise(function (resolve, reject) {
    firebaseapp.auth().signInWithPopup(providerApp)
      .then(function (result) {
        // var token = result.credential.accessToken;
        var user = result.user;
        let userObj = {
          name: user.displayName,
          img: user.photoURL
        }
        console.log(user)

        resolve(userObj)
      }).catch(function (error) {
        var credential = error.credential;
        reject(credential)
      });
  })
}


let check = () => {
  return new Promise((resolve, reject) => {
    firebaseapp.auth().onAuthStateChanged(function (user) {
      if (user) {
        let userObj = {
          name: user.displayName,
          img: user.photoURL
        }
        console.log(user)

        resolve(userObj)

      } else {
        reject(false)


      }
    });


  })

}


let Timer = (seconds) => {
    return new Promise((resolve, reject) => {
        var minutes = Math.round((seconds - 30) / 60),
            remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }
        resolve(minutes + ":" + remainingSeconds)
        if (seconds == 0) {
            reject("0:00")
        }
    })
}
function Logout(){
  firebaseapp.auth().signOut().then(function() {
}).catch(function(error) {
});
}

export { getUser, loginfacebook, check ,Timer ,Logout}
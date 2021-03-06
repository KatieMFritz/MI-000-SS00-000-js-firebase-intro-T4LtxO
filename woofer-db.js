/* global firebase */
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyA8pXiNlI_51_iEcKEBc0NSsVXOjKjysYI',
  authDomain: 'woofer-7b430.firebaseapp.com',
  databaseURL: 'https://woofer-7b430.firebaseio.com',
  projectId: 'woofer-7b430',
  storageBucket: 'woofer-7b430.appspot.com',
  messagingSenderId: '76059962967'
}
firebase.initializeApp(config)

firebase.auth().signInAnonymously()

// CREATE a new woof in Firebase
function createWoofInDatabase (woof) {
  firebase.database().ref('woofs').push(woof)
}

// READ from Firebase when woofs are added, changed, or removed
// Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
function readWoofsInDatabase () {
  // read new firebase records
  firebase.database().ref('woofs')
  .on('child_added', function (newWoofSnapshot) {
    addWoofRow(newWoofSnapshot.key, newWoofSnapshot.val())
  })
  // read updated firebase records
  firebase.database().ref('woofs')
  .on('child_changed', function (changedWoofSnapshot) {
    updateWoofRow(changedWoofSnapshot.key, changedWoofSnapshot.val())
  })
  // read deleted firebase records
  firebase.database().ref('woofs')
  .on('child_removed', function (deletedWoofSnapshot) {
    deleteWoofRow(deletedWoofSnapshot.key)
  })
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  firebase.database().ref('woofs').child(woofKey).child('text').set(woofText)
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  firebase.database().ref('woofs').child(woofKey).remove()
}

// Load all of the data
readWoofsInDatabase()

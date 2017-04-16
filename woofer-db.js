// TODO Sign into the database anonymously

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
  // TODO create a new record in Firebase
}

// READ from Firebase when woofs are added, changed, or removed
// Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
function readWoofsInDatabase () {
  // TODO read new, changed, and deleted Firebase records
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // TODO update the record in Firebase
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  // TODO delete the record from Firebase
}

// Load all of the data
readWoofsInDatabase()

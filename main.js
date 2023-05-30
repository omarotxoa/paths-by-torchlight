// Service Worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceworker.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}


// Database
const dbname = "char_list";
const request = indexedDB.open(dbname, 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Create an objectStore to hold character information
  // const objectStore = db.createObjectStore("characters", { keyPath: "id" });
  const objectStore = db.createObjectStore("characters", { autoIncrement: true});

  objectStore.createIndex("id", "id", { unique: true });

  // Use transaction oncomplete to make sure the objectStore creation is
  // finished before adding data into it.
  objectStore.transaction.oncomplete = (event) => {
    // Store values in the newly created objectStore.
    const characterObjectStore = db
      .transaction("characters", "readwrite")
      .objectStore("characters");
    characterData.forEach((character) => {
      characterObjectStore.add(character);
    });
  };  
}

const characterData = [];
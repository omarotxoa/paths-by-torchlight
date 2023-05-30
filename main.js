if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceworker.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}





// // Database
// const dbName = "mock_char_info";
// const request = indexedDB.open(dbName, 1);

// // Data
// const characterData = [
//     {
//         id: 0,
//         name: "Morv",
//         gender: "Male",
//         weapon: "Bloody Hand Wraps",
//         Race: "Human",
//     }
// ];

// request.onerror = (event) => {
//   // Handle errors.
// };

// request.onupgradeneeded = (event) => {
//   const db = event.target.result;

//   // Create an objectStore to hold character information
//   const objectStore = db.createObjectStore("characters", { keyPath: "id" });

//   objectStore.createIndex("id", "id", { unique: true });

//   // Use transaction oncomplete to make sure the objectStore creation is
//   // finished before adding data into it.
//   objectStore.transaction.oncomplete = (event) => {
//     // Store values in the newly created objectStore.
//     const characterObjectStore = db
//       .transaction("characters", "readwrite")
//       .objectStore("characters");
//     characterData.forEach((character) => {
//       characterObjectStore.add(character);
//     });
//   };
// };
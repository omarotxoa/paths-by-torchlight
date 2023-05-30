// Login Form Logic
if(document.querySelector("#login")) {
    let loginForm = document.querySelector("#login");
    let submitBtn = document.querySelector("#login button");
    
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        //disable submit button to prevent multiple submissions
        submitBtn.disabled = true; 
      
        let username = document.getElementById("username");
        let password = document.getElementById("password");
      
        if (username.value == "" || password.value == "") {
          alert("Ensure you input a value in both fields!");
        } else {
          // perform operation with form input
          window.location.href = "./develop.html";
        }
      });
}

// Character Creation Form Logic
if(document.querySelector("#create-character-form")) {
    const characterForm = document.querySelector("#create-character-form");

    characterForm.addEventListener("submit", (e) => {
        e.preventDefault();   

        // Get Form Data
            let characterLevel = 1;
            let characterName = document.querySelector("#character-name");
            let characterGender = document.querySelector("#character-gender");
            let characterWeapon = document.querySelector("#character-weapon");
            let characterRace = document.querySelectorAll("input[name='race']:checked");

            let characterRaces = [];
            characterRace.forEach( (elem) => {
                characterRaces.push(elem.value);
            });

        // Create Character Object
            let characterData = [];

            let newCharacter = new Character(characterName.value, characterLevel, characterGender.value, characterWeapon.value, characterRaces);

            characterData.push(newCharacter);
            console.log(characterData);

        // Add Character Data to IndexedDB

            const request = indexedDB.open("char_list", 1);

            request.onsuccess = (event) => {
                const db = event.target.result;
                console.log("Connection complete");
                
                const transaction = db.transaction(["characters"], "readwrite");
                const objectStore = transaction.objectStore("characters");
                const objectStoreRequest = objectStore.add(characterData);

                objectStoreRequest.onsuccess = (event) => {
                    console.log("Character data added to the database");
                };

                transaction.oncomplete = (event) => {
                    console.log("Transactin complete successfully.");
                };
                    
                transaction.onerror = (event) => {
                    console.log(event.target.errorCode);
                };
            }; 

        console.log(`${characterName.value}, ${characterGender.value}, ${characterWeapon.value}, ${characterRaces}`);
    });

    function Character(name,level,gender,weapon,races) {
        this.name = name;
        this.level = level;
        this.gender = gender;
        this.weapon = weapon;  
        this.races = races;
    }
}

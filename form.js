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
            let characterName = document.querySelector("#character-name");
            let characterGender = document.querySelector("#character-gender");
            let characterWeapon = document.querySelector("#character-weapon");
            let characterRace = document.querySelectorAll("input[name='race']:checked");
            // let characterRace = [1, 2, 3];

            let characterRaces = [];
            characterRace.forEach( (elem) => {
                characterRaces.push(elem.value);
            });

        // Create Character Object
            const characterData = [];
            let id = 0;

            const transaction = db.transaction(["customers"], "readwrite");

            const newCharacter = new Character(id, characterName.value, characterGender.value, characterWeapon.value, characterRaces);

            characterData.push(newCharacter);
            console.log(characterData);

        console.log(`${characterName.value}, ${characterGender.value}, ${characterWeapon.value}, ${characterRaces}`);
    });

    function Character(id, name,gender,weapon,races) {
        this.name = name;
        this.gender = gender;
        this.weapon = weapon;  
        this.races = races;
        this.id = id;
    }
}

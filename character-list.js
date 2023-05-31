// Get Character List
const characterListContainer = document.querySelector(".character-list");

(function () {
    const request = indexedDB.open("char_list", 1);
    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(["characters"]);
        const objectStore = transaction.objectStore("characters");
        const objectStoreRequest = objectStore.getAll();

        objectStoreRequest.onsuccess = (event) => {
            const characterData = event.target.result;
            if (characterData.length === 0) {
                document.querySelector(".character-list").innerHTML = `<p class="error">No characters found</p>`;
            }
            
            characterData.forEach((character) => {
                printCharacter(character);
                console.log(character);
            });
        };  

        if (!objectStoreRequest) {
            const targetElement = document.querySelector(".character-list");
            targetElement.innerHTML = `<p class="error">Error: ${event.target.errorCode}</p>`;
        }
    };
})();

function printCharacter(character) {
    const pElement = document.createElement("p");
    const spanElement = document.createElement("span");
    const strongElement = document.createElement("strong");

    strongElement.textContent = character[0].name;
    spanElement.appendChild(strongElement);
    pElement.appendChild(spanElement);
    pElement.innerHTML += ` lvl ${character[0].level} ${character[0].gender} ${character[0]['races']}`;

    const targetElement = document.querySelector(".character-list");
    targetElement.appendChild(pElement);
}


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceworker.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}

// Login Form Logic

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



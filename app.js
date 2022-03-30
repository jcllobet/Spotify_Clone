// Its function is to initialize other components / js functions

import { footer } from "./components/footer.js";
import { sidenav } from "./components/sidenav.js";

const checkIfValid = (event) => {
    event.preventDefault();
    console.log("clicked");
    let password = document.getElementById("inputPassword3");
    let email = document.getElementById("inputEmail3");
    const button = document.getElementById("logInButton");
    console.log(password.value);
    console.log(email.value);

    if (password.value === "1" && email.value === "admin@gmail.com") {
        location.href = "/index.html";
        return true;
    } else {
        return alert("Wrong email or password try again.");
    }
};

// Add a listener to the button
const addLoginListener = () => {
    const button = document.getElementById("logInButton");
    button.addEventListener("click", checkIfValid);
    console.log("added listener");
};

//----------------------------------------------------------------------------------------------------------------------
window.onload = function () {
    if (
        (window.location.pathname !== "/pages/login.html") |
        (window.location.pathname !== "/pages/register.html")
    ) {
        sidenav("sidenav"); // We can add routes, currentRoute if needed
        footer("footer"); // We can add routes, currentRoute if needed
    }
    // add listener to the login button
    addLoginListener();
};

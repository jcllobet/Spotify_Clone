// Its function is to initialize other components / js functions

import { footer } from "./components/footer.js";
import { sidenav } from "./components/sidenav.js";

window.onload = function () {
    sidenav("sidenav"); // We can add routes, currentRoute if needed
    footer("footer"); // We can add routes, currentRoute if needed
};
//redirect from log in page to home page.
function getInputs() {
    const password = document.getElementById("inputPassword3");
    const email = document.getElementById("inputEmail3");
    const button = document.getElementById("myButton");
    if (password.value === "cat123" && email.value === "admin@gmail.com") {
        button.onclick(location.href = "/index.html");
    } else {
        return alert("Wrong email or password try again.");
    }
}
//----------------------------------------------------------------------------------------------------------------------
//redirect from log in page to home page attempt 2.
//----------------------------------------------------------------------------------------------------------------------
// function getInputs() {
//     const password = document.getElementById("inputPassword3");
//     const email = document.getElementById("inputEmail3");
//     if (password.value === "cat123" && email.value === "admin@gmail.com") {
//         return (location.href = "/index.html");
//     } else {
//         return alert("Wrong email or password try again.");
//     }
// }
// document.getElementById("myButton").onclick = getInputs;
//----------------------------------------------------------------------------------------------------------------------
//redirect from log in page to home page attempt 3.
//----------------------------------------------------------------------------------------------------------------------
// function getInputs() {
//     const password = document.getElementById("inputPassword3");
//     const email = document.getElementById("inputEmail3");
//     const button = document.getElementById("myButton");
//     if (password.value === "cat123" && email.value === "admin@gmail.com") {
//         button.onclick(location.href = "/index.html");
//     } else {
//         return alert("Wrong email or password try again.");
//     }
// }
// onload = getInputs();
//----------------------------------------------------------------------------------------------------------------------
//redirect from log in page to home page attempt 4.
//----------------------------------------------------------------------------------------------------------------------
// button = document.getElementById("myButton");
// button.onclick = function () {
//     const password = document.getElementById("inputPassword3");
//     const email = document.getElementById("inputEmail3");
//     const button = document.getElementById("myButton");
//     if (password.value === "cat123" && email.value === "admin@gmail.com") {
//         button.onclick(location.href = "/index.html");
//     } else {
//         return alert("Wrong email or password try again.");
//     }
// }
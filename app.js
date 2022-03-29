// Its function is to initialize other components / js functions

import { footer } from "./components/footer.js";
import { sidenav } from "./components/sidenav.js";

window.onload = function () {
    sidenav("sidenav"); // We can add routes, currentRoute if needed
    footer("footer"); // We can add routes, currentRoute if needed
};
//redirect from log in page to home page.
function getInputs(id) {
    const password = document.getElementById("inputPassword3");
    const email = document.getElementById("inputEmail3");
    if (password.value === "cat123" && email.value === "admin@gmail.com") {
        document.getElementById("myButton").onclick = function () {
            location.href = "/index.html"
        }
    } else {
        alert("Wrong email or password try again.");
    }
}
//redirect from log in page to home page.
document.getElementById("myButton").onclick = function () {
    location.href = "/index.html"
}
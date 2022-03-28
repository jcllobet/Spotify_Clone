// Its function is to initialize other components / js functions

import { footer } from "./components/footer.js";
import { sidenav } from "./components/sidenav.js";

window.onload = function () {
    //sidenav("sidenav"); // We can add routes, currentRoute if needed
    footer("footer"); // We can add routes, currentRoute if needed
};

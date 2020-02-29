import tanks from "./components/tanks.js";
import graveyeard from "./components/graveyeard.js";


const init = () => {
    tanks.tankBuilder();
    graveyeard.buildGraveyard();
}

init();
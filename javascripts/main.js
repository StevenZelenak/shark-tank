import tanks from "./components/tanks.js";
import graveyeard from "./components/graveyeard.js";
import personData from "./helpers/data/personData.js";



const sharkAttackEvent = () => {
    personData.randomMurder();
    tanks.tankBuilder();
    graveyeard.buildGraveyard();
};

const init = () => {
    tanks.tankBuilder();
    graveyeard.buildGraveyard();
    $('#biteMe').click(sharkAttackEvent);
}

init();
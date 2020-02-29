import utils from "../helpers/utils.js";
import personData from "../helpers/data/personData.js";

const tankBuilder = () => {
    let domString = '';
    domString += personData.getAlivePersons();
    utils.printToDom('tank', domString);
}

export default {
    tankBuilder,
}
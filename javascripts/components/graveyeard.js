import utils from "../helpers/utils.js";
import personData from "../helpers/data/personData.js";

const buildGraveyard = () => {
    let domString = '';
    const deadPersons = personData.getDeadPersons();

    deadPersons.forEach(deadppl => {
        domString += '<div class ="col-4 mb-4">'
        domString += '<div class="card">'
        domString += `<div class="card-body"><h5>${deadppl.name}</h5></div>`
        domString += '</div>'
        domString += '</div>'
    });

    utils.printToDom("graveyard", domString);
}


export default {
    buildGraveyard,
}
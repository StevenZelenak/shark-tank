import utils from "../helpers/utils.js";
import personData from "../helpers/data/personData.js";

const buildGraveyard = () => {
    let domString = '';
    const deadPersons = personData.getDeadPersons();

    deadPersons.forEach(deadppl => {
        domString += '<div class ="col-4 mb-4">'
        domString += '<div class="card border border-dark">'
        domString += `<div class="card-body text-center"><h5>${deadppl.name}</h5></div>`
        domString += `<button id=${deadppl.id} class="btn btn-dark revive-btn">Revive</button>`
        domString += '</div>'
        domString += '</div>'
    });

    utils.printToDom("graveyard", domString);
}


export default {
    buildGraveyard,
}
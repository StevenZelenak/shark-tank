const printToDom = (divId, textToPrint) => {
    //$('#tank') jquery
    let selectedDiv = $(`#${divId}`);
    selectedDiv.innerHTML = textToPrint;
}



export default {
    printToDom,
}
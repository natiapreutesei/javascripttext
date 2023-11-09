function checkSpaties() {
    // Take the sentence that was inputted
    const inputText = document.getElementById('spaties').value;

    // Verwijder de spaties uit de tekst
    // /\s/ zoekt naar elk teken in de string dat overeenkomt met een witruimtekarakter. Hier omvat witruimte karakters zoals spaties, tabs en nieuwe regels.
    //
    // g is een zogenaamde "flag" die aangeeft dat de reguliere expressie globaal moet zoeken in de hele string. Zonder deze "g"-flag zou alleen het eerste overeenkomende witruimtekarakter worden vervangen.
    //
    // '' is de vervangende waarde. In dit geval is het een lege string, wat betekent dat de witruimte wordt vervangen door niets. Dus in feite wordt de witruimte verwijderd.
    const textWithoutSpaces = inputText.replace(/\s/g, '');


    // Plaats het resultaat terug in het HTML-element met het id 'resultaat'
    document.getElementById('resultaat').innerHTML = textWithoutSpaces;
}

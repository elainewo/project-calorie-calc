console.log("test")

function rechnen() {
    let grosse = document.getElementById("grosse").value;
    let alter = document.getElementById("alter").value;
    let gewicht = document.getElementById("gewicht").value;
    let y = getFreizeit();

    if (document.getElementsByName("radio")[0].checked) {
        console.log("Weiblich")
        let Grundumsatz = 655.1 + (9.6 * gewicht) + (1.8 * grosse) - (4.7 * alter);
        let Gesamtumsatz = Grundumsatz * y;
        document.getElementById("kcal2").innerHTML = `Dein Gesamtumsatz ist ${Gesamtumsatz.toFixed(1)} kcal`;
        document.getElementById("kcal").innerHTML = `Dein Grundumsatz ist ${Grundumsatz.toFixed(1)} kcal`;
    } else {
        console.log("Männlich")
        let Grundumsatz2 = 664.7 + (13.7 * gewicht) + (5 * grosse) - (6.8 * alter);
        let Gesamtumsatz2 = Grundumsatz2 * y;
        document.getElementById("kcal2").innerHTML = `Dein Gesamtumsatz ist ${Gesamtumsatz2.toFixed(1)} kcal`;
        document.getElementById("kcal").innerHTML = `Dein Grundumsatz ist ${Grundumsatz2.toFixed(1)} kcal`;
    }
}

let getFreizeit = () => {
    let j = document.getElementById("freizeit").selectedIndex
    let auswahl = document.getElementById("freizeit").options[j].value
    console.log(auswahl)
    return auswahl
}

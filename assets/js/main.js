let gewicht = document.getElementById("gewicht");
let größe = document.getElementById("größe");
let alter = document.getElementById("alter");
let aktivität = document.getElementById("aktivität");
let grundumsatz;
let index;

document.getElementById("button").addEventListener("click", () => {
  let i = aktivität.selectedIndex;
  console.log(i);
  index = aktivität.options[i].value;

  if (document.getElementById("weiblich").checked) {
    grundumsatz =
      655.1 + 9.6 * gewicht.value + 1.8 * größe.value - 4.7 * alter.value;
  } else {
    grundumsatz =
      66.47 + 13.7 * gewicht.value + 5 * größe.value - 6.8 * alter.value;
  }
  document.getElementsByTagName("td")[1].innerHTML = grundumsatz.toFixed(0);
  document.getElementsByTagName("td")[2].innerHTML = (
    grundumsatz * 4.184
  ).toFixed(0);
  document.getElementsByTagName("td")[4].innerHTML = (
    grundumsatz * index
  ).toFixed(0);
  document.getElementsByTagName("td")[5].innerHTML = (
    grundumsatz *
    4.184 *
    index
  ).toFixed(0);
});

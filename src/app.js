/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const arregloAleatorio = arreglo => {
  let length = arreglo.length;
  let indice = Math.floor(Math.random() * length);
  let valor = arreglo[indice];

  return valor;
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  let aleatorioWho = arregloAleatorio(who);
  let aleatorioAction = arregloAleatorio(action);
  let aleatorioWhat = arregloAleatorio(what);
  let aleatorioWhen = arregloAleatorio(when);

  let excusa =
    " " +
    aleatorioWho +
    " " +
    aleatorioAction +
    " " +
    aleatorioWhat +
    " " +
    aleatorioWhen;

  console.log(excusa);
  let elemento = document.getElementById("excusa");
  elemento.innerHTML = excusa;
};

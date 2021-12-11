import "./base.scss";
import logoImg from "./content/logo_1.png"

const message : string = "Hola mundo !!!";

const contMenssage = document.getElementById("message");
contMenssage.innerHTML = `average score ${message}`;

const contImg = document.createElement("img");
contImg.src = logoImg;
document.getElementById("image-1").appendChild(contImg);
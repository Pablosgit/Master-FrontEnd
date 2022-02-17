import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

const averageScore : number = 90;
const messageToDisplay = `Average score ${averageScore}`;

//document.write(messageToDisplay);


ReactDOM.render(
  <div>
      <header>
          <h1>Bonus points</h1>
      </header>
      <main>
          <div id="message">PROTECTO SEMILLA</div>
          <section className="enunciado">
              <p>Crear tu propio proyecto semilla con las tecnologías que elijas (mínimo traspilar a ES5 y dar soporte a Typescript).</p>
              <ul>
                  <li>{messageToDisplay}</li>
              </ul>
          </section>
          <section>

          </section>
      </main>
      <footer>
          Ejercicio Opcional
      </footer>
  </div>,
  document.getElementById("root")
);



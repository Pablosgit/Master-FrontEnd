import React from "react";
import ReactDOM  from "react-dom";
import "./style.css";

//const baseURL = process.env.API_BASE_URL;

//console.log("Api base:" + baseURL);

ReactDOM.render(
    <div>
        <header>
            <h1>Ejercicio Opcional con Parcel</h1>
        </header>
        <main>
            <div id="message">Hello from React DOM</div>
            <section className="enunciado">
                <p>Implementar una aplicación opcional con Parcel:</p>
                <ul>
                    <li>Mostrar un hola mundo desarrollado con React.</li>
                    <li>Tener una versión de build de producción.</li>
                    <li>Tener variables de entorno para diferentes entornos (desarrollo y producción).</li>
                    <li>Tener una forma de medir cuanto ocupa cada librería y nuestro código en el bundle.</li>
                </ul>
            </section>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus risus ac massa suscipit egestas. Nunc consequat est a nibh feugiat ornare. Integer in sem quis justo egestas tempus eu a odio. Proin ultrices vitae orci non semper. Quisque maximus dolor mi, vitae congue purus imperdiet nec. Proin porta odio a convallis cursus. Nam at diam sit amet massa aliquam commodo a ut massa. Integer non posuere dolor, et dapibus mi. Maecenas in molestie enim.</p>
                <p>Nunc auctor elementum leo, eu consectetur arcu efficitur non. Nullam feugiat erat vel elit posuere semper. Curabitur eget efficitur odio, ut efficitur neque. Pellentesque sollicitudin sem nisl, eleifend pharetra tortor volutpat nec. Donec aliquam molestie justo fermentum tempus. Duis at vulputate ipsum. Aenean dictum risus ac odio eleifend molestie euismod et justo. Sed tincidunt fringilla purus, in posuere risus commodo et. Aliquam sodales libero rhoncus neque interdum, a varius augue pretium. Vestibulum eleifend lorem ac lobortis vestibulum. Phasellus blandit lacus turpis. Pellentesque ac feugiat risus, sit amet tempus elit. Donec non dui nibh. Sed dui elit, pellentesque sed consequat ac, egestas ac dui.</p>
            </section>
        </main>
        <footer>
            Ejercicio Opcional
        </footer>
    </div>,
    document.getElementById("root")
);

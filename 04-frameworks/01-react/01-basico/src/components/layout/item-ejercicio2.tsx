import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardImg2 from "../../assets/logo_2.png";


export const ItemEjercicio2: React.FC = () => {

    const navigate = useNavigate();
    const elemento = document.getElementById("root");
    elemento.removeAttribute("class");

    return (
            <Card className="card-act">
                <CardActionArea onClick={() => {navigate("/list-rym")}}>
                    <CardMedia
                        component="img"
                        className="content-img"
                        image={CardImg2}
                        title="Ejercicio 2"
                    />
                    <CardContent>
                        <h2>Ejercico Opcional</h2>
                        <p>Tirar de la API rest de Rick y Morty para mostrar la lista de personajes de la serie.</p>
                    </CardContent>
                </CardActionArea>
            </Card>
    )

}
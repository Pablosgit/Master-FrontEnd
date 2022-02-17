import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardImg1 from "../../assets/logo_1.png";


export const ItemEjercicio1: React.FC = () => {

    const navigate = useNavigate();
    const elemento = document.getElementById("root");
    elemento.removeAttribute("class");

    return (
            <Card className="card-act">
                <CardActionArea onClick={() => {navigate("/list")}}>
                    <CardMedia 
                        component="img"
                        className="content-img"
                        image={CardImg1}
                        title="Ejercicio 1"
                    />
                    <CardContent>
                            <h2>Ejercico Básico</h2>
                            <p>Buscar el listado de miembros de Github de la organización que indique el usuario.</p>
                    </CardContent>
                </CardActionArea>
            </Card>
    )

}
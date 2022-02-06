import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Box from '@material-ui/core/Box';
import CardImg1 from "./content/logo_1.png";
import CardImg2 from "./content/logo_2.png";

const useStyles = makeStyles({
    media: {
      height: 140,
    },
  });

export const IndicePage: React.FC = () => {

    const navigate = useNavigate();
    const elemento = document.getElementById("root");
    elemento.removeAttribute("class");
    const classes = useStyles();

    return (
        <Box className="main-content" display="flex" alignItems="center" justifyContent="center" flexDirection="row">
            <Card className="card-act">
                <CardActionArea onClick={() => {navigate("/list")}}>
                    <CardMedia 
                        className={classes.media}
                        image={CardImg1}
                        title="Ejercicio 1"
                    />
                    <CardContent>
                            <h2>Ejercico Básico</h2>
                            <p>Buscar el listado de miembros de Github de la organización que indique el usuario.</p>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className="card-act">
                <CardActionArea onClick={() => {navigate("/list-rym")}}>
                    <CardMedia 
                        className={classes.media}
                        image={CardImg2}
                        title="Ejercicio 2"
                    />
                    <CardContent>
                        <h2>Ejercico Opcional</h2>
                        <p>Tirar de la API rest de Rick y Morty para mostrar la lista de personajes de la serie.</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )

}
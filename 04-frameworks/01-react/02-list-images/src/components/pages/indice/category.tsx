import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";



export const CategoryPage: React.FC = () => {

    const navigate = useNavigate();

    return(
        <Box className="content-category" display="flex" alignItems="center" justifyContent="center" flexDirection="row">
            <Card className="card-cat">
                <CardActionArea onClick={() => {navigate("/kitties")}}>
                    <CardMedia 
                        component="img"
                        className="content-img"
                        image="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg"
                        title="Kitties"
                    />
                    <CardContent>
                            <h2>Kitties images</h2>
                            <p>Listados de imagenes de gatitos.</p>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className="card-cat">
                <CardActionArea onClick={() => {navigate("/puppies")}}>
                    <CardMedia 
                        component="img"
                        className="content-img"
                        image="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg"
                        title="Puppies"
                    />
                    <CardContent>
                            <h2>Puppies images</h2>
                            <p>Listados de imagenes de perritos.</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}
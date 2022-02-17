import React from "react";
import Box from '@material-ui/core/Box';
import { ItemEjercicio1 } from "../../layout/item-ejercicio1";
import { ItemEjercicio2 } from "../../layout/item-ejercicio2";



export const IndicePage: React.FC = () => {

    return (
        <Box className="main-content" display="flex" alignItems="center" justifyContent="center" flexDirection="row">
           <ItemEjercicio1 />
           <ItemEjercicio2 />
        </Box>
    )

}
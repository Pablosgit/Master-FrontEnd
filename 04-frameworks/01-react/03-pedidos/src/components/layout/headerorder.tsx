import React from "react";
import Box from '@mui/material/Box';
import {HeaderOrder1} from "./headerorder-1"
import {HeaderOrder2} from "./headerorder-2"
import {ModalOrder} from "./modal"


export const HeaderOrder: React.FC = () => {

    return (
        <>
        <h2>Pedido a proveedor</h2>
        <Box
            className="content-cabecera-orders"
            component="form"
            noValidate
            autoComplete="off"
        >
           <HeaderOrder1/> 
           <HeaderOrder2/> 
        </Box>
        <ModalOrder/>
        </>
    )

}
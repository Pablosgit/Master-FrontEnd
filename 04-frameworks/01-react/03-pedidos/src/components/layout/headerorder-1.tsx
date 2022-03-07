import React from "react";
import TextField from '@mui/material/TextField';
import {OrdersContext} from "../provider/orders-context.provider"


export const HeaderOrder1: React.FC = React.memo(() => {

    const {ordersSelected, setOrdersSelected} = React.useContext(OrdersContext);

    return (
        <>
            <TextField
                label="Número"
                defaultValue={ordersSelected.order}
                size="small"
                variant="filled"
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                label="Proveedor"
                defaultValue={ordersSelected.provider}
                size="small"
                variant="filled"
            />
            <TextField
                type="date"
                label="Fecha"
                defaultValue={ordersSelected.date}
                size="small"
                variant="filled"
                InputLabelProps={{
                    shrink: true,
                  }}
            />
        </>
    )

});
import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import InputAdornment from '@mui/material/InputAdornment';
import {OrdersContext, ModalContext} from "../provider/orders-context.provider";
import {OrdersDetail} from "../../model/orders.info";
import { useNavigate } from "react-router-dom";


export const HeaderOrder2: React.FC = () => {

    const navigate = useNavigate();
    const {ordersSelected, setOrdersSelected} = React.useContext(OrdersContext);
    const {ModalOrder, setModalOrder} = React.useContext(ModalContext);
    const [buttonDisabled, setbuttonDisabled] = React.useState(true);
    const [totalAmount, setTotalAmount] = React.useState(0);
    const [newstatus, setNewStatus] = React.useState("");
    const [percent, setPercent] = React.useState(0);

    const getStatus = (status:boolean) => status ? "done": "clear";
    const getNumValidOrder = (NumProvider:OrdersDetail[]) => NumProvider.filter( num => num.status).length
    const getPercentStatus = (NumProvider:OrdersDetail[]) => Math.round((100/NumProvider.length)*getNumValidOrder(NumProvider));
    const getTotal = (Num:OrdersDetail[]) => Num.reduce((sum, amounts) => sum + amounts.amount, 0);
    
    const saveOrder = () => {
        setModalOrder(true);
        const timeModal = setTimeout(() => {
            setModalOrder(false)
            navigate("/");
          }, 2000);
          return() =>{
            clearTimeout(timeModal);
          }
    }

    const checkOrder = () => {
        if (percent === 100){
            setbuttonDisabled(false)
            setNewStatus(getStatus(true))
        } else {
            setbuttonDisabled(true);
            setNewStatus(getStatus(false))
        }
    }

    React.useEffect(()=>{ 
        setTotalAmount(getTotal(ordersSelected.detail));
        setPercent(getPercentStatus(ordersSelected.detail));
        checkOrder();
    });

    return (
        <>
            <TextField
                label="Importe Total"
                value={totalAmount}
                size="small"
                variant="filled"
                InputProps={{
                    endAdornment: <InputAdornment position="end">€</InputAdornment>,
                    readOnly: false,
                  }}
            />
            <TextField
                label="Estado"
                value={percent +" %"}
                size="small"
                variant="filled"
                InputProps={{
                    endAdornment: <InputAdornment position="end"><Icon className={newstatus}>{newstatus}</Icon></InputAdornment>,
                    readOnly: true,
                }}
            />
            <div className="content-button-form">
                <Button variant="contained" size="small" disabled={buttonDisabled} onClick={()=>saveOrder()}>Enviar</Button>
            </div>
        </>
    )

}
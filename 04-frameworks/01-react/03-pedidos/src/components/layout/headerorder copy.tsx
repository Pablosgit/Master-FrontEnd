import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import InputAdornment from '@mui/material/InputAdornment';
import {OrdersContext} from "../provider/orders-context.provider"
import {OrdersDetail} from "../../model/orders.info";
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export const HeaderOrder: React.FC = () => {

    const navigate = useNavigate();
    const {ordersSelected, setOrdersSelected} = React.useContext(OrdersContext);
    const [buttonDisabled, setbuttonDisabled] = React.useState(true);
    const [totalAmount, setTotalAmount] = React.useState(0);
    const [newstatus, setNewStatus] = React.useState("");
    const [percent, setPercent] = React.useState(0);

    const getStatus = (status:boolean) => status ? "done": "clear";
    const getNumValidOrder = (NumProvider:OrdersDetail[]) => NumProvider.filter( num => num.status).length
    const getPercentStatus = (NumProvider:OrdersDetail[]) => Math.round((100/NumProvider.length)*getNumValidOrder(NumProvider));
    const getTotal = (Num:OrdersDetail[]) => Num.reduce((sum, amounts) => sum + amounts.amount, 0);
    const saveOrder = () => {
        handleOpen();
        const timeModal = setTimeout(() => {
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(()=>{ 
        setTotalAmount(getTotal(ordersSelected.detail));
        setPercent(getPercentStatus(ordersSelected.detail));
        checkOrder();
    });

    return (
        <>
        <h2>Pedido a proveedor</h2>
        <Box
            className="content-cabecera-orders"
            component="form"
            noValidate
            autoComplete="off"
        >
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
        </Box>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Aviso de pedido.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Pedido modificado con exito.
            </Typography>
            </Box>
        </Modal>
        </>
    )

}
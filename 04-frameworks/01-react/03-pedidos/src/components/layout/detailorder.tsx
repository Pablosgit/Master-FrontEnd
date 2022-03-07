import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {OrdersContext} from "../provider/orders-context.provider";
import {OrdersDetail} from "../../model/orders.info";


export const DetailOrder: React.FC = () => {

    const {ordersSelected, setOrdersSelected} = React.useContext(OrdersContext);
    const [checked, setChecked] = React.useState([]);
    const newOrdersSelected = {...ordersSelected};

    const getStatus = (status:boolean) => status ? "Válido": "Pendiente";

    const setTotalPrice = (id: number, valor:string) => {
      newOrdersSelected.detail.filter(num => num.id === id)[0].amount = parseInt(valor);
      setOrdersSelected(newOrdersSelected);
    }

    const getSelectedIten = (event:any, id:number) => {
      checked[id] = event.target.checked;
    };

    const getStatusIcon = (icons:any) => icons.every(icon => icon.status);

    const generaSelected = () => {
      for(let i=0; i< ordersSelected.detail.length; i++){
        checked[i] = false;
      }
    }

    const getSelectedStatus = (status:boolean) => {
         const newOrdersSelected = {...ordersSelected};
          for(let i=0; i< checked.length; i++){
              if (checked[i]) {
                newOrdersSelected.detail.find(num => num.id === (i+1)).status = status;
              }
          }
        setOrdersSelected(newOrdersSelected);
    };  
    
    React.useEffect(()=>{   
       generaSelected();
    },[]);


    return (
        <>
        <ButtonGroup className="content-button" variant="contained" aria-label="outlined primary button group" size="small">
            <Button onClick={() => getSelectedStatus(true)}>Validar</Button>
            <Button onClick={() => getSelectedStatus(false)}>Invalidar</Button>
        </ButtonGroup>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell align="right" padding="checkbox"></TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Importe</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersSelected.detail.map((row:OrdersDetail) => (
              <TableRow className="content-order-item" key={row.id} role="checkbox">
                <TableCell  padding="checkbox">
                    <Checkbox
                            onChange={(e) => getSelectedIten(e,(row.id)-1)}
                            // checked={checked[(row.id)-1]}
                            inputProps={{ 'aria-label': 'controlled' }}
                    />
                </TableCell>
                <TableCell>
                    {getStatus(row.status)}
                </TableCell>
                <TableCell align="right">
                   {row.description}
                </TableCell>
                <TableCell align="right">
                    <TextField
                        type="number"
                        onChange={(e) => setTotalPrice(row.id,e.target.value)}
                        defaultValue={row.amount}
                        size="small"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">€</InputAdornment>,
                          }}
                    />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </>
    )

}
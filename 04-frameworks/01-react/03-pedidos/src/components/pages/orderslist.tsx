import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper';
import {OrdersItem} from "../../data/orders.data";
import {OrdersInfo, OrdersDetail} from "../../model/orders.info";
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import {OrdersContext} from "../provider/orders-context.provider"
import { useNavigate } from "react-router-dom";


export const OrdersListPage: React.FC = () => {

    const navigate = useNavigate();
    const {ordersSelected, setOrdersSelected} = React.useContext(OrdersContext);

    const getStatusIcon = (status:boolean) => status ? "done": "clear";

    const getOrder = (row:OrdersInfo) => {
      setOrdersSelected(row);
      navigate("/ordersdetail");
    }

    const getStatus = (icons:any) => getStatusIcon(icons.every(icon => icon.status))

    const getTotal = (Num:OrdersDetail[]) => Num.reduce((sum, amounts) => sum + amounts.amount, 0)

    return (
        <>
        <h2>Order List</h2>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>Num Order</TableCell>
              <TableCell align="right">Provider</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {OrdersItem.map((row) => (
              <TableRow className="content-order-item" key={row.order} >
                <TableCell component="th" scope="row">
                  {row.order}
                </TableCell>
                <TableCell align="right">
                    {row.provider}
                </TableCell>
                <TableCell align="right">
                    {row.date}
                </TableCell>
                <TableCell align="right">
                    {getTotal(row.detail)} €
                </TableCell>
                <TableCell align="center">
                    <Icon className={getStatus(row.detail)}>{getStatus(row.detail)}</Icon>
                </TableCell>
                <TableCell align="right">
                <Button onClick={() => getOrder(row)}>
                   <Icon className="content-item-edit" >edit</Icon>
                </Button>               
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
    )

}
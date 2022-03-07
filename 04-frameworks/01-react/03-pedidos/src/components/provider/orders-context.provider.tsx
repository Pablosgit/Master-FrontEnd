import React from "react";
import {OrdersInfo, userModalContext} from "../../model/orders.info";
  
const initialContextOrders = {
    ordersSelected: {
        id: 0,
        order: "",
        provider: "",
        date: "",
        detail: [{
            id: 0,
            status: false,
            description: "",
            amount:0,
        }],
    },
    setOrdersSelected: (value:OrdersInfo) => {},
}

export const OrdersContext = React.createContext(initialContextOrders);
  
export const OrdersProvider: React.FC = ({children}) => {

    const [ordersSelected, setOrdersSelected] = React.useState<OrdersInfo>();

    return (
        <OrdersContext.Provider 
            value={{
                ordersSelected,
                setOrdersSelected,
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
    
}



const initialContextModal:userModalContext = {
    ModalOrder: false,
    setModalOrder: (value) => {},
}

export const ModalContext = React.createContext(initialContextModal);
  
export const ModalProvider: React.FC = ({children}) => {

    const [ModalOrder, setModalOrder] = React.useState(false);

    return (
        <ModalContext.Provider 
            value={{
                ModalOrder,
                setModalOrder,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
    
}

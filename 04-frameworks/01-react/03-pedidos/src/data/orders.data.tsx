import {OrdersInfo} from "../model/orders.info"

export const OrdersItem: OrdersInfo[] = [
  { 
    id: 1, 
    order: "1", 
    provider: "Proveedor 1", 
    date: "2021-01-10",  
    detail:[
      {
        id: 1,
        status: false, 
        description: "Piezas y repuestos", 
        amount:40
      },
      {
        id: 2,
        status: true, 
        description: "Recambios impresión", 
        amount:105
      },
      {
        id: 3,
        status: false, 
        description: "Recambios y consumibles", 
        amount:75
      }
    ]},
  { 
    id: 2, 
    order: "2", 
    provider: "Proveedor 2", 
    date: "2022-02-01", 
    detail:[
      {
        id: 1, 
        status: true, 
        description: "Soporte plataforma", 
        amount:35
      },
      {
        id: 2, 
        status: false, 
        description: "Programas de gestión", 
        amount:250
      },
      {
        id: 3, 
        status: false, 
        description: "Gastos de administración", 
        amount:50
      },
      {
        id: 4, 
        status: false, 
        description: "Comsumibles varios", 
        amount:25
      }
    ]},
  { 
    id: 3, 
    order: "3", 
    provider: "Proveedor 3", 
    date: "2021-03-01", 
    detail:[
      {
        id: 1, 
        status: false, 
        description: "Reactivos maquinaria", 
        amount:0
      },
      {
        id: 2, 
        status: false, 
        description: "Consumibles papelería",
        amount:0
      }
    ]},
]


export interface OrdersInfo {
    id: number,
    order: string,
    provider: string,
    date: string,
    detail: {
            id: number,
            status: boolean,
            description: string,
            amount:number,
        }[],
}


export interface OrdersDetail {
    id: number,
    status: boolean,
    description: string,
    amount:number,
}


export interface userModalContext {
    ModalOrder: boolean,
    setModalOrder: (value:boolean) => void,
}
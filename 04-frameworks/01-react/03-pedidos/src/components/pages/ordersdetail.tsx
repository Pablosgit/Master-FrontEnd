import React from "react";
import {HeaderOrder} from "../layout/headerorder"
import {DetailOrder} from "../layout/detailorder"
import { Link} from "react-router-dom";
import {OrdersContext} from "../provider/orders-context.provider";

export const OrdersDetailPage: React.FC = () => {

    return (
        <>
            <HeaderOrder/>
            <DetailOrder/>
        </>
    )

}
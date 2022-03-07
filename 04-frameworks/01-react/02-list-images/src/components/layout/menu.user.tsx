import React from "react";
import {KittiesContext} from "../provider/pictureInfo-context.provider";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

export const MenuUser: React.FC = () => {

    const {imagesSelected, setSelectedPicture} = React.useContext(KittiesContext);
    const [NumItem, setNumItem] = React.useState(0);
    const [HiddenCart, setHiddenCart] = React.useState(true);
    

    const hiddenMenuUser = () => {
        if (HiddenCart){
            setHiddenCart(false);
        } else {
            setHiddenCart(true);
        }
    }

    React.useEffect(()=>{
        const cart = document.getElementById("cart");
        cart.hidden = HiddenCart;
    }, [HiddenCart])

    React.useEffect(()=>{
        setNumItem(imagesSelected.length)
    }, [imagesSelected])

    return (
        <nav className="content-menu-user">
            <IconButton onClick={()=>hiddenMenuUser()}>
            <Badge className="iten-menu" badgeContent={NumItem} color="primary">
                <ShoppingCartIcon fontSize="small" color="action" />
            </Badge>
            </IconButton>
        </nav>
    );
}
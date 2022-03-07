import React from "react";
import {KittiesContext} from "../provider/pictureInfo-context.provider";
import {galeryItemKitties} from "../../data/images-kitties.data";
import {galeryItemPuppies} from "../../data/images-puppies.data";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';

export const Cart: React.FC  = () => {

    const {imagesSelected, setSelectedPicture} = React.useContext(KittiesContext);
    const [DisableButton, setDisableButton] = React.useState(true);
    const [NumItem, setNumItem] = React.useState(0);
    const idImagesSelected = imagesSelected;
    const dataImages = [...galeryItemKitties,...galeryItemPuppies];
     
    const deleteItem = (img: string) => {
        const pos = idImagesSelected.indexOf(img);
        idImagesSelected.splice(pos,1);
        setSelectedPicture([...idImagesSelected]);
    }

    const deleteCart = () => setSelectedPicture([]);

    React.useEffect(()=>{
        if (!idImagesSelected.length){
            setDisableButton(true);
        } else {
            setDisableButton(false) 
        }
    }, [imagesSelected])

    const getElemSelected = (selectedID: string) => dataImages.find(item => item.id === selectedID)
    
    return (
        <div id="cart" className="content-cart">
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
            <ShoppingCartIcon />
            <h2>Carrito</h2>
            </Box>
            
            <List dense={true}>
               {imagesSelected.map( images =>
               <ListItem
                    key={getElemSelected(images).id}
                    secondaryAction={
                            <IconButton 
                                edge="end" 
                                aria-label="delete" 
                                onClick={() => deleteItem(images)}
                            >
                                    <DeleteIcon />
                            </IconButton>
                        }
                    >
                    <ListItemAvatar>
                        <Avatar src={getElemSelected(images).picUrl} alt={getElemSelected(images).title} />
                    </ListItemAvatar>
                    <ListItemText primary={getElemSelected(images).title} secondary={getElemSelected(images).id} />
                </ListItem>
            )}
            </List>
            <Button 
                className="button-delete-cart" 
                size="small" 
                variant="contained" 
                startIcon={<DeleteIcon />}  
                disabled={DisableButton}
                onClick={() => deleteCart()}
            >
                    Vaciar carro
            </Button>
        </div>
        
    );

}
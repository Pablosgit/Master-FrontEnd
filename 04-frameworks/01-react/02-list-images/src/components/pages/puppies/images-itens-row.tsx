import React from "react";
import {PictureInfo} from "../../../model/viewModel";
import Checkbox from '@mui/material/Checkbox';
import {KittiesContext} from "../../provider/pictureInfo-context.provider";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';

interface Props {
    images: PictureInfo;
}

export const ImagesItenRows: React.FC<Props> = (props) => {

    const {images} = props;
    const {imagesSelected, setSelectedPicture} = React.useContext(KittiesContext);
    const idImagesSelected = imagesSelected;

    const actualizaImagesSelected = (idImage:PictureInfo) => { 
        if (!idImage.selected){
            idImage.selected = true;
            idImagesSelected.push(idImage.id);
        } else {
            idImage.selected = false;
            const pos = idImagesSelected.indexOf(idImage.id);
            idImagesSelected.splice(pos,1);
        }
        setSelectedPicture([...idImagesSelected]);
    }

    return(
        <Card className="content-iten-images" key={images.id} onClick={() => actualizaImagesSelected(images)}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100"
                    image={images.picUrl}
                    alt={images.title}
                />
                <CardContent>
                    {images.title}
                </CardContent>
                <CardActions>
                    <Checkbox
                            title="Buy"
                            checked={images.selected}
                            inputProps={{ 'aria-label': 'controlled' }}
                    /> Buy
                </CardActions>
            </CardActionArea>
        </Card> 
    )

}
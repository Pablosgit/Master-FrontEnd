import React from "react";
import { MenuCategory} from "../../layout/menu.category";
import {galeryItemKitties} from "../../../data/images-kitties.data";
import {PictureInfo} from "../../../model/picture.info"
import {ImagesItenRows} from "./images-itens-row"
import {KittiesContext} from "../../provider/pictureInfo-context.provider";
import Box from '@mui/material/Box';



interface newPictureInfo {
    id: string;
    picUrl: string;
    title: string;
    selected: boolean;
}

export const KittiesPage: React.FC = () => {

    const {imagesSelected, setSelectedPicture} = React.useContext(KittiesContext);
    const [imagesIten, setImagesIten] = React.useState<newPictureInfo[]>([]);

    const getElemSelected = (selectedID: string): boolean =>
        imagesSelected.some(select => select === selectedID)

    const getImagesIten = (galery:PictureInfo[]) => 
        galery.map((images) => {
            return {
                ...images,
                selected: getElemSelected(images.id),
            }
        });

    React.useEffect(() => {
        let getImages = getImagesIten(galeryItemKitties);
        setImagesIten(getImages);
    }, [imagesSelected]);

    return(
        <>
        <div className="content-cat">
            <MenuCategory/>
            <h2>Kitties images</h2>
            <Box className="content-img" display="flex" alignItems="center" justifyContent="center" flexDirection="row">
               {imagesIten.map((images) => (
                   <ImagesItenRows key={images.id} images={images} />
               ))}
            </Box>
        </div>
        </>
    );

} 
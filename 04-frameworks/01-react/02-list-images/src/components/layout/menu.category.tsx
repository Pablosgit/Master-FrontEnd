import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export const MenuCategory: React.FC = () => {

    const navigate = useNavigate();

    return (
        <ButtonGroup className="content-menu-cat" variant="contained" aria-label="outlined primary button group">
            <Button onClick={() => {navigate("/kitties")}} size="small">Kitties</Button>
            <Button onClick={() => {navigate("/puppies")}} size="small">Puppies</Button>
        </ButtonGroup>
    );
}
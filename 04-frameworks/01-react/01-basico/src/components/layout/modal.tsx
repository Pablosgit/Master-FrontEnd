import React from "react";
import Modal from '@material-ui/core/Modal';
import {ModalBody} from "./modal-body"


export const ModalComponet: React.FC = () => {

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
        <ModalBody />
        </Modal>
        </>
    )

}
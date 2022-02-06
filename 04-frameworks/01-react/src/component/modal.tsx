import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';


export const ModalComponet: React.FC = () => {

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    
    const errorModalLogin = (
        <div className="modal-login">
        <Card>
          <CardContent>
          <h2 id="simple-modal-title">Self-identification error</h2>
          <p id="simple-modal-description">
              User / password not valid, psst... admin / test
          </p>
          <Button variant="contained" color="primary" onClick={handleClose}>Cerrar</Button>
        </CardContent>
        </Card>
        </div>
    );

    return (
        <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
        {errorModalLogin}
        </Modal>
        </>
    )

}
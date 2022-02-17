import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import logoReact from "../../../assets/React-icon.svg";
import Modal from '@material-ui/core/Modal';
import {ModalBody} from "../../layout/modal-body"

const useStyles = makeStyles({
  imputuser: {
    margin: '15px 0',
    width: "100%",
  },
  bodylogin: {
    padding: "15px 25px",
  },
});

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState(""); 
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const elemento = document.getElementById("root");
  elemento.className = "content-login";

  const contentModal = ModalBody();
  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/indice");
    } else {
      setOpen(true);
    }

  };

  return (
    <Box className="main-content" display="flex" justifyContent="center" alignItems="center" height="100%" textAlign="center">
    <Card>
    <form onSubmit={handleNavigation}>
    <CardContent className={classes.bodylogin}>
      <img src={logoReact} style={{ width: "8rem"}} />
      <Typography>Laboratorio Módulo 4.1 - React</Typography>
      <div>
        <div>
          <TextField
           className={classes.imputuser}
            variant="outlined"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <TextField
           className={classes.imputuser}
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <CardActions>
        <Button variant="contained" color="primary" type="submit">login</Button>
      </CardActions>
      </CardContent>
    </form>
    </Card>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {contentModal}
    </Modal>
    </Box>
  );
};

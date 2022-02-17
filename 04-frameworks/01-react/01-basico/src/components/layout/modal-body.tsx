import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


export const ModalBody = () => {
    return (
        <div className="modal-login">
        <Card>
          <CardContent>
          <h2 id="simple-modal-title">Self-identification error</h2>
          <p id="simple-modal-description">
              User / password not valid, psst... admin / test
          </p>
        </CardContent>
        </Card>
        </div>
    )

}
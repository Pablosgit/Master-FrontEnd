import React from "react";
import { Link, generatePath} from "react-router-dom";
import {MemberEntityRyM} from "../../../model/model";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';

interface Props{
    member: MemberEntityRyM
}


export const MemberTableRow : React.FC<Props> = (props) => {

    const {member} = props

    return (
        <TableRow  key={member.id}>
              <TableCell >
               <Avatar alt={member.name} src={member.image} style={{ width: "4rem", height: "4rem" }} />
              </TableCell >
              <TableCell >
                <span>{member.id}</span>
              </TableCell >
              <TableCell >
                <Link to={generatePath("/detail-rym/:id", { id: member.id })}>
                  {member.name}
                </Link>
              </TableCell >
            </TableRow >
    )

}
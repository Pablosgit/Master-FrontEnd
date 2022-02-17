import React from "react";
import {InputFindContextGit} from "../../provider/inputfind-context.provider"
import { Link} from "react-router-dom";
import { MemberEntity } from "../../../model/model";
import { MemberTableRow } from "./menber-table-row";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const getMembers = (org: string) => {
  return fetch(`https://api.github.com/orgs/${org}/members`).then((response) => {
    if (response.ok){
      return response.json();
    } else {
      return [];
    }
  });
};

export const ListPage: React.FC = () => {
  
  const {inputFindValue, setInputFindValue} = React.useContext(InputFindContextGit);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  React.useEffect(() => {
    getMembers(inputFindValue).then((data)=> {
      setMembers(data);
   });
  }, []);

  const handClick = () => {
    getMembers(inputFindValue).then((data)=> {
       setMembers(data);
    });
  };


  return (
    <>
      <div className="main-content">
      <h2 className="title-page">Hello from List page</h2>
      <TextField type="text" id="standard-basic-size-small" size="small" value={inputFindValue} onChange={(e) => setInputFindValue(e.target.value)}/>
      <Button className="button-search" variant="contained" color="primary" type="submit" onClick={handClick}>Search</Button>
      <p><cite>Search by company: Lemoncode, Microsoft, apple...</cite></p>
      <p><Link to="/indice">Back to Indice page</Link></p>
      <TableContainer component={Paper}>
      <Table aria-label="a dense table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0 ? 
          members.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : members
          ).map((member) => (
            <MemberTableRow key={member.id} member={member} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={members.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </TableContainer>
      <p><Link to="/indice">Back to Indice page</Link></p>
      </div>
    </>
  );
};

import React from "react";
import {InputFindContextRyn} from "../../provider/inputfind-context.provider"
import { Link} from "react-router-dom";
import { MemberEntityRyM } from "../../../model/model";
import { MemberTableRow } from "./menber-table-row-rym";
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
import { useDebounce } from "../../hooks/use-debounce.hook";

const getMembers = (org: string) => {
  return fetch(`https://rickandmortyapi.com/api/character?species=${org}`).then((response) => response.json());
};

export const ListPageMyR: React.FC = () => {

  const {inputFindValue, setInputFindValue} = React.useContext(InputFindContextRyn);
  const [members, setMembers] = React.useState<MemberEntityRyM[]>([]);
  const debounecValue = useDebounce(inputFindValue);

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
    getMembers(debounecValue).then((data)=> {
      setMembers(data.results);
   });
  }, [debounecValue]);

  // React.useEffect(() => {
  //   getMembers(inputFindValue).then((data)=> {
  //     setMembers(data.results);
  //  });
  // }, []);

  const handClick = () => {
    getMembers(inputFindValue).then((data)=> {
       setMembers(data.results);
    });
  };


  return (
    <>
      <div className="main-content">
      <h2 className="title-page">Hello from List page</h2>
      <TextField type="text" id="standard-basic-size-small" size="small" value={inputFindValue} onChange={(e) => setInputFindValue(e.target.value)}/>
      <Button className="button-search" variant="contained" color="primary" type="submit" onClick={handClick}>Search</Button>
      <p><cite>Search by species: Human, Alien, Humanoid, unknown, Poopybutthole, Mythological, Animal, Robot, Cronenberg, Disease</cite></p>
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

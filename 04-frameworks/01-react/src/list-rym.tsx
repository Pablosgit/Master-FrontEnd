import React from "react";
import {InputFindContext} from "./component/inputfind-context.provider"
import { Link} from "react-router-dom";
import { MemberEntityRyM } from "./component/model";
import { MemberTableRow } from "./menber-table-row-rym";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';


const getMembers = (org: string) => {
  return fetch(`https://rickandmortyapi.com/api/character?species=${org}`).then((response) => response.json());
};

export const myTypeList = () => "Human";

export const ListPageMyR: React.FC = () => {
  //const {inputFindValue, setInputFindValue} = React.useContext(InputFindContext);
  const [inputFindValue, setInputFindValue] = React.useState("Human"); 
  // Find: Human, Alien, Humanoid, unknown, Poopybutthole, Mythological, Animal, Robot, Cronenberg, Disease
  const [members, setMembers] = React.useState<MemberEntityRyM[]>([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  // console.log(members);

  React.useEffect(() => {
    getMembers(inputFindValue).then((data)=> {
      setMembers(data.results);
   });
  }, []);

  const handClick = () => {
    getMembers(inputFindValue).then((data)=> {
       setMembers(data.results);
    });
  };


  return (
    <>
      <div className="main-content">
      <input type="text" value={inputFindValue} onChange={(e) => setInputFindValue(e.target.value)}/>
      <button type="submit" onClick={handClick}>Search</button>
      <p><Link to="/indice">Back to Indice page</Link></p>
      <h2>Hello from List page</h2>
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
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={members.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
    </>
  );
};

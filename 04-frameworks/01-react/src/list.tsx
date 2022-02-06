import React from "react";
import {InputFindContext} from "./component/inputfind-context.provider"
import { Link} from "react-router-dom";
import { MemberEntity } from "./component/model";
import { MemberTableRow } from "./menber-table-row";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ReactPaginate from 'react-paginate';
import Paper from '@material-ui/core/Paper';


const getMembers = (org: string) => {
  return fetch(`https://api.github.com/orgs/${org}/members`).then((response) => response.json());
};

export const ListPage: React.FC = () => {
  const {inputFindValue, setInputFindValue} = React.useContext(InputFindContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  
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

  

  // <ReactPaginate
  //       breakLabel="..."
  //       nextLabel="next >"
  //       onPageChange={handlePageClick}
  //       pageRangeDisplayed={5}
  //       pageCount={pageCount}
  //       previousLabel="< previous"
  //       renderOnZeroPageCount={null}
  //     />

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
          {members.map((member) => (
            <MemberTableRow key={member.id} member={member} />
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </div>
    </>
  );
};

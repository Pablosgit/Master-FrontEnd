import React from "react";
import { Link, useParams} from "react-router-dom";
import {MemberDetailEntityRyM} from "./component/model";


const createDeafaultMenberDetail = () =>({
  id: "",
  status: "",
  name: "",
  species: "",
  gender: "",
  image: "",
});

export const DetailPageMyR: React.FC = () => {
  const { id } = useParams();
  const [member, setMember] = React.useState<MemberDetailEntityRyM>(
    createDeafaultMenberDetail()
  );

  //https://api.github.com/orgs/lemoncode/members/antonio06

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  return (
    <div className="main-content">
      <h2>Hello from Detail page</h2>
      <div>
        <img src={member.image} style={{ width: "5rem" }} />
      </div>
      <h3>Name: {member.name}</h3>
      <h4>User Id: {id}</h4>
      <h4>Especie: {member.species}</h4>
      <h4>Genero: {member.gender}</h4>
      <Link to="/list-rym">Back to list page</Link>
    </div>
  );
};

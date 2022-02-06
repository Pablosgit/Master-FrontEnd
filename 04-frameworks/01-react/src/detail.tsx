import React from "react";
import { Link, useParams} from "react-router-dom";
import {MemberDetailEntity} from "./component/model";


const createDeafaultMenberDetail = () =>({
    id: "",
    login: "",
    name: "",
    company: "",
    bio: "",
    avatar_url:"",
});

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDeafaultMenberDetail()
  );

  //https://api.github.com/orgs/lemoncode/members/antonio06

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, [id]);

  return (
    <div className="main-content">
      <h2>Hello from Detail page</h2>
      <div>
        <img src={member.avatar_url} style={{ width: "5rem" }} />
      </div>
      <h3>User Id: {id}</h3>
      <h4>Company: {member.company}</h4>
      <h4>Bio: {member.bio}</h4>
      <Link to="/list">Back to list page</Link>
    </div>
  );
};

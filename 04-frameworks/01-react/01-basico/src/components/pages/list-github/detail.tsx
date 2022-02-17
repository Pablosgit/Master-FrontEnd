import React from "react";
import { Link, useParams} from "react-router-dom";
import {MemberDetailEntity} from "../../../model/model";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

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
      <h2 className="title-page">Hello from Detail page</h2>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
      <Card  className="card-detail">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              {member.name.charAt(0)}
            </Avatar>
          }
          title={member.name}
          subheader={member.company}
        />
        <CardMedia
          component="img"
          className="content-img"
          image={member.avatar_url}
          title={member.name}
        />
        <CardContent>
          {/* <div className="content-img-character">
            <img src={member.image} style={{ width: "10rem" }} />
          </div> */}
          <Typography component="p"><strong>Company:</strong> {member.company}</Typography>
          <Typography component="p"><strong>Bio:</strong> {member.bio}</Typography>
        </CardContent>
      </Card>
      </Box>
      <Link to="/list">Back to list page</Link>
    </div>
  );
};

import React from "react";
import { Link, useParams} from "react-router-dom";
import {MemberDetailEntityRyM} from "../../../model/model";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

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
      <h2 className="title-page">Hello from Detail page</h2>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
      <Card className="card-detail">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              {id}
            </Avatar>
          }
          title={member.name}
          subheader={member.status}
        />
        <CardMedia
          component="img"
          className="content-img"
          image={member.image}
          title={member.name}
        />
        <CardContent>
          {/* <div className="content-img-character">
            <img src={member.image} style={{ width: "10rem" }} />
          </div> */}
          <Typography component="p"><strong>Especie:</strong> {member.species}</Typography>
          <Typography component="p"><strong>Genero:</strong> {member.gender}</Typography>
        </CardContent>
      </Card>
      </Box>
      <Link to="/list-rym">Back to list page</Link>
      
    </div>
  );
};

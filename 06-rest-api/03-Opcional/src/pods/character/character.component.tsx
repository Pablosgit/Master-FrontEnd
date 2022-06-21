import React from 'react';
import { Character } from './character.vm';
import * as classes from './character.styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character} = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.species.charAt(0)}</Avatar>}
        title={character.name}
        subheader={character.species}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography component="p">Status: {character.status}</Typography>
          <Typography component="p">Gender: {character.gender}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

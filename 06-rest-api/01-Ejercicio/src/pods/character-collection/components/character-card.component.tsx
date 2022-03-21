import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onGetCharacter: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onGetCharacter } = props;

  return (
    <Card style={{cursor: "pointer"}} onClick={() => onGetCharacter(character.id.toString())}>
      <CardHeader
        avatar={
          <Avatar aria-label="Character">
            {character.id}
          </Avatar>
        }
        title={character.name}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

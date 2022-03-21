import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { EpisodeEntityVm } from '../episode-collection.vm';
import * as classes from './episode-card.styles';
import Typography from '@material-ui/core/Typography';

interface Props {
  episode: EpisodeEntityVm;
  onGetEpisode: (id: string) => void;
}

export const EpisodeCard: React.FunctionComponent<Props> = (props) => {
  const { episode, onGetEpisode } = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="Episode">
            {episode.id}
          </Avatar>
        }
        title={episode.name}
        subheader={episode.air_date}
      />
      <CardContent>
        <div className={classes.content}>
        <Typography component="p">Episode: {episode.episode}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

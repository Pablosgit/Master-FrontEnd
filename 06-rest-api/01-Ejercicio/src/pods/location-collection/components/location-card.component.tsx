import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { LocationEntityVm } from '../location-collection.vm';
import * as classes from './location-card.styles';
import Typography from '@material-ui/core/Typography';

interface Props {
  location: LocationEntityVm;
  onGetLocation: (id: string) => void;
}

export const LocationCard: React.FunctionComponent<Props> = (props) => {
  const { location, onGetLocation } = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="Location">
            {location.id}
          </Avatar>
        }
        title={location.name}
        subheader={location.type}
      />
      <CardContent>
        <div className={classes.content}>
        <Typography component="p">Dimension: {location.dimension}</Typography>
        {/* <Typography component="p">{location.created}</Typography> */}
        </div>
      </CardContent>
    </Card>
  );
};

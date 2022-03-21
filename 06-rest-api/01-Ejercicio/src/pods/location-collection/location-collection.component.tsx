import * as React from 'react';
import { LocationEntityVm } from './location-collection.vm';
import { LocationCard } from './components/location-card.component';
import * as classes from './location-collection.styles';
import Pagination from '@material-ui/lab/Pagination';

interface Props {
  locationCollection: LocationEntityVm[];
  onGetLocation: (id: string) => void;
  getChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  numPages: number;
  page: number;
}

export const LocationCollectionComponent: React.FunctionComponent<Props> = (props) => {

  const [disablePagination, setDisablePagination] = React.useState(false);

  const {
    locationCollection,
    onGetLocation,
    getChangePage,
    page,
    numPages
  } = props;

  React.useEffect(() => {
    if ( numPages <= 1){
      setDisablePagination(true);
    } else {
      setDisablePagination(false);
    }
  });

  return (
    <div className={classes.root}>
      <h2>LOCATION LIST</h2>
      <Pagination className={classes.paginate} disabled={disablePagination} count={numPages} page={page} onChange={getChangePage} size="small" showFirstButton showLastButton />
      <ul className={classes.list}>
        {locationCollection.map((location) => (
          <li key={location.id}>
            <LocationCard location={location} onGetLocation={onGetLocation} />
          </li>
        ))}
      </ul>
      <Pagination className={classes.paginate} disabled={disablePagination} count={numPages} page={page} onChange={getChangePage} size="small" showFirstButton showLastButton  />
    </div>
  );
};

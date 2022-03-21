import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useLocationCollection } from './location-collection.hook';
import { LocationCollectionComponent } from './location-collection.component';

export const LocationCollectionContainer = () => {
  const { pageCollection, locationCollection, loadLocationCollection } = useLocationCollection();
  const [numPageValue, setNumPageValue] = React.useState(1);
  const history = useHistory();

  React.useEffect(() => {
    loadLocationCollection(numPageValue);
  }, [numPageValue]);


  const handleGetLocation = (id: string) => {
    history.push(linkRoutes.getCharacter(id));
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setNumPageValue(value);
  };


  return (
    <LocationCollectionComponent
      locationCollection={locationCollection}
      onGetLocation={handleGetLocation}
      getChangePage={handleChangePage}
      numPages={pageCollection}
      page={numPageValue}
    />
  );
};

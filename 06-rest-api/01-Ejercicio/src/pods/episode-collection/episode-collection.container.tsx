import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useEpisodeCollection } from './episode-collection.hook';
import { EpisodeCollectionComponent } from './episode-collection.component';

export const EpisodeCollectionContainer = () => {
  const { pageCollection, episodeCollection, loadEpisodeCollection } = useEpisodeCollection();
  const [numPageValue, setNumPageValue] = React.useState(1);
  const history = useHistory();

  React.useEffect(() => {
    loadEpisodeCollection(numPageValue);
  }, [numPageValue]);


  const handleGetEpisode = (id: string) => {
    history.push(linkRoutes.getCharacter(id));
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setNumPageValue(value);
  };


  return (
    <EpisodeCollectionComponent
      episodeCollection={episodeCollection}
      onGetEpisode={handleGetEpisode}
      getChangePage={handleChangePage}
      numPages={pageCollection}
      page={numPageValue}
    />
  );
};

import * as React from 'react';
import { EpisodeEntityVm } from './episode-collection.vm';
import { EpisodeCard } from './components/episode-card.component';
import * as classes from './episode-collection.styles';
import Pagination from '@material-ui/lab/Pagination';

interface Props {
  episodeCollection: EpisodeEntityVm[];
  onGetEpisode: (id: string) => void;
  getChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  numPages: number;
  page: number;
}

export const EpisodeCollectionComponent: React.FunctionComponent<Props> = (props) => {

  const [disablePagination, setDisablePagination] = React.useState(false);

  const {
    episodeCollection,
    onGetEpisode,
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
      <h2>EPISODE LIST</h2>
      <Pagination className={classes.paginate} disabled={disablePagination} count={numPages} page={page} onChange={getChangePage} size="small" showFirstButton showLastButton />
      <ul className={classes.list}>
        {episodeCollection.map((episode) => (
          <li key={episode.id}>
            <EpisodeCard episode={episode} onGetEpisode={onGetEpisode} />
          </li>
        ))}
      </ul>
      <Pagination className={classes.paginate} disabled={disablePagination} count={numPages} page={page} onChange={getChangePage} size="small" showFirstButton showLastButton  />
    </div>
  );
};

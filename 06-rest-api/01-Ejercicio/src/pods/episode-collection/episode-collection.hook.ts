import * as React from 'react';
import { EpisodeEntityVm } from './episode-collection.vm';
import { getEpisodeCollection } from './api';
import { mapFromApiToVm } from './episode-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<EpisodeEntityVm[]>([]);
  const [pageCollection, setPageCollection] = React.useState<number>(0);

  const loadEpisodeCollection = (id:number) => {
    getEpisodeCollection(id).then((result) =>{
    setPageCollection(result.info.pages);
    setEpisodeCollection(mapToCollection(result.results, mapFromApiToVm))
    });
  };

  return { pageCollection, episodeCollection, loadEpisodeCollection };
};

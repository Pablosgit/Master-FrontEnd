import * as React from 'react';
import { LocationEntityVm } from './location-collection.vm';
import { getLocationCollection } from './api';
import { mapFromApiToVm } from './location-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<LocationEntityVm[]>([]);
  const [pageCollection, setPageCollection] = React.useState<number>(0);

  const loadLocationCollection = (id:number) => {
    getLocationCollection(id).then((result) =>{
    setPageCollection(result.info.pages);
    setLocationCollection(mapToCollection(result.results, mapFromApiToVm))
    });
  };

  return { pageCollection, locationCollection, loadLocationCollection };
};

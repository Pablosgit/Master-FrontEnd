import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>([]);
  const [pageCollection, setPageCollection] = React.useState<number>(0);

  const loadCharacterCollection = (id:number, valueFind: string) => {
    getCharacterCollection(id, valueFind).then((result) =>{
    setPageCollection(result.info.pages);
    setCharacterCollection(mapToCollection(result.results, mapFromApiToVm))
    });
  };

  return { pageCollection, characterCollection, loadCharacterCollection };
};

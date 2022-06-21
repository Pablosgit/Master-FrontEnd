import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import {InputFindContext} from "../../common/provider/inputfind-context.provider"
import {PageNumContext} from "../../common/provider/page-context.provider"

export const CharacterCollectionContainer = () => {
  const { pageCollection, characterCollection, loadCharacterCollection } = useCharacterCollection();
  const {inputFindValue, setInputFindValue} = React.useContext(InputFindContext);
  const {numPageValue, setNumPageValue} = React.useContext(PageNumContext);
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection(numPageValue, inputFindValue);
  }, [numPageValue]);


  const handleGetCharacter = (id: string) => {
    history.push(linkRoutes.getCharacter(id));
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setNumPageValue(value);
  };

  const handleGetfindCharacter = ():void => {
    setNumPageValue(1);
    loadCharacterCollection(numPageValue, inputFindValue)
  };


  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onGetCharacter={handleGetCharacter}
      getChangePage={handleChangePage}
      onChangeFindValue={setInputFindValue}
      onGetfindCharacter={handleGetfindCharacter}
      findValue={inputFindValue}
      numPages={pageCollection}
      page={numPageValue}
    />
  );
};

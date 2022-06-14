import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const [species, setSpecies] = React.useState<Lookup[]>([]);
  const { id } = useParams();
  const history = useHistory();

  const handleLoadSpecieCollection = async () => {
    const apiSpecies = await api.getSpecies();
    setSpecies(apiSpecies);
  };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(parseInt(id));
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    handleLoadSpecieCollection();
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} species={species} onSave={handleSave} />;
};

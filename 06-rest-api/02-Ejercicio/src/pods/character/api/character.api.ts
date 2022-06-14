import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockSpecies, mockCharacterCollection } from './character.mock-data';

const characterListUrl = '/api/characters';
const speciesListUrl = '/api/species'

export const getCharacter = async (id: number): Promise<Character> => {
  //return mockCharacterCollection.find((h) => h.id === id);
  const response = await fetch(`${characterListUrl}/${id}`);
  if (response.ok){
    return await response.json();
  } else  {
    throw Error(response.statusText);
  }
};

export const getSpecies = async (): Promise<Lookup[]> => {
  const response = await fetch(speciesListUrl);
  if (response.ok){
    return await response.json();
  } else  {
    throw Error(response.statusText);
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
   if(character.id){
      // Put
      await fetch(`${characterListUrl}/${character.id}` , {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(character),
      });
   } else {

   }

   return true
};

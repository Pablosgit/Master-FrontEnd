import Axios from 'axios';
import { CharacterEntityApi2 } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];


const characterListUrl = "/api/characters";


export const getCharacterCollection = async (): Promise<CharacterEntityApi2[]> => {
  return Axios.get<CharacterEntityApi2[]>(characterListUrl).then((response) =>{
      return response.data;
  });
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};

import Axios from 'axios';
import { Character } from './character.api-model';


const getUrl = (id:string) => {
  return "https://rickandmortyapi.com/api/character/" + id;
}

export const getCharacter = async (id: string): Promise<Character> => {
  return Axios.get<Character>(getUrl(id)).then((response) =>{
    return response.data;
  });
};


import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

//const url = "/api/characters";

const getUrl = (id:number, valueFind:string) => {
  let newUrl = "https://rickandmortyapi.com/api/character/";
  newUrl = valueFind !=="" ? newUrl + "?page=" + id + "&species=" + valueFind :  newUrl + "?page="+id ;
  return newUrl;
}

export const getCharacterCollection = async (id:number, valueFind:string): Promise<CharacterEntityApi> => {
  return Axios.get<CharacterEntityApi>(getUrl(id,valueFind)).then((response) =>{
      return response.data;
  });
};

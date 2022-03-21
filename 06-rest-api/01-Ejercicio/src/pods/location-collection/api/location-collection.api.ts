import Axios from 'axios';
import { LocationEntityApi } from './location-collection.api-model';

//const url = "/api/Location";

const getUrl = (id:number) => {
  return "https://rickandmortyapi.com/api/location/?page="+id;
}

export const getLocationCollection = async (id:number): Promise<LocationEntityApi> => {
  return Axios.get<LocationEntityApi>(getUrl(id)).then((response) =>{
      return response.data;
  });
};

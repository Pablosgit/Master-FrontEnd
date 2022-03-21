import Axios from 'axios';
import { EpisodeEntityApi } from './episode-collection.api-model';

//const url = "/api/Episode";

const getUrl = (id:number) => {
  return "https://rickandmortyapi.com/api/episode/?page="+id;;
}

export const getEpisodeCollection = async (id:number): Promise<EpisodeEntityApi> => {
  return Axios.get<EpisodeEntityApi>(getUrl(id)).then((response) =>{
      return response.data;
  });
};

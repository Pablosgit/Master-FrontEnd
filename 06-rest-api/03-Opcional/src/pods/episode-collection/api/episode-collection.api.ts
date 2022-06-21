import { EpisodeEntityApi } from './episode-collection.api-model';
import { gql } from "graphql-request";
import { graphQLClient } from 'core/api/graphql.client';


export const getEpisodeCollection = async (id:number, valueFind:string): Promise<EpisodeEntityApi> => {
  const  query = gql `
    query {
      episodes(page:${id}) {
        info {
          count
          pages
          next
          prev
        },
        results {
          id
          name
          air_date
          episode
          created
          characters{
            name
          }
        }
      }
    }
  `;

  const { episodes } = await graphQLClient.request(query)

return episodes;

};

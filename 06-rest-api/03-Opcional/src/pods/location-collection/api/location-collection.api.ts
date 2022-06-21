import { LocationEntityApi } from './location-collection.api-model';
import { gql } from "graphql-request";
import { graphQLClient } from 'core/api/graphql.client';


export const getLocationCollection = async (id:number): Promise<LocationEntityApi> => {
  const  query = gql `
    query {
      locations(page:${id}) {
        info {
        count
        pages
        next
        prev
      },
        results {
          id
          name
          type
          dimension
        }
      }
    }
  `;

  const { locations } = await graphQLClient.request(query)

return locations;

};

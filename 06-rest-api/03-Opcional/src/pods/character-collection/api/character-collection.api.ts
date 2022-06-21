import { CharacterEntityApi } from './character-collection.api-model';
import { gql } from "graphql-request"
import { graphQLClient } from 'core/api/graphql.client';

export const getCharacterCollection = async (id:number, valueFind:string): Promise<CharacterEntityApi> => {
  const  query = gql `
    query {
      characters(page:${id}, filter: { name: "${valueFind}" }) {
        info {
        count
        pages
        next
        prev
      },
        results {
          name
          id
          status
          species
          type
          gender
          image
        }
      }
    }
  `;

  const { characters } = await graphQLClient.request(query)

return characters;

};

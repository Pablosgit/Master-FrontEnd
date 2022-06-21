
import { Character } from './character.api-model';
import { gql } from "graphql-request"
import { graphQLClient } from 'core/api/graphql.client';



export const getCharacter = async (id:number): Promise<Character> => {
  console.log(id)
  const  query = gql `
    query {
      character(id:${id}) {
          name
          id
          status
          species
          type
          gender
          image
        }
    }
  `;

  const { character } = await graphQLClient.request(query)

return character;

};



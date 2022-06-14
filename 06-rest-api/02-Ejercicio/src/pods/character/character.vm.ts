export interface Character {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  bestSentences: string
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  image: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  bestSentences: ''
});

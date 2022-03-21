import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import Pagination from '@material-ui/lab/Pagination';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Props {
  characterCollection: CharacterEntityVm[];
  onGetCharacter: (id: string) => void;
  getChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  onChangeFindValue: (value: string) => void;
  onGetfindCharacter: () => void;
  findValue: string;
  numPages: number;
  page: number;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (props) => {

  const [disablePagination, setDisablePagination] = React.useState(false);

  const {
    characterCollection,
    onGetCharacter,
    getChangePage,
    onChangeFindValue,
    onGetfindCharacter,
    findValue,
    page,
    numPages
  } = props;

  React.useEffect(() => {
    if ( numPages <= 1){
      setDisablePagination(true);
    } else {
      setDisablePagination(false);
    }
  });

  return (
    <div className={classes.root}>
      <h2>CHARACTER LIST</h2>
      <TextField type="text" size="small" value={findValue} onChange={(e) => onChangeFindValue(e.target.value)} style={{ margin: "0" }}/>
      <Button variant="contained" color="primary" type="submit" size="small" onClick={onGetfindCharacter} style={{ margin: "0 0 0 10px" }}>Search</Button>
      <p><cite>Search by species: Human, Alien, Humanoid, unknown, Poopybutthole, Mythological, Animal, Robot, Cronenberg, Disease</cite></p>
      <Pagination className={classes.paginate} disabled={disablePagination} count={numPages} page={page} onChange={getChangePage} size="small" showFirstButton showLastButton />
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onGetCharacter={onGetCharacter} />
          </li>
        ))}
      </ul>
      <Pagination className={classes.paginate} disabled={disablePagination} count={numPages} page={page} onChange={getChangePage} size="small" showFirstButton showLastButton  />
    </div>
  );
};

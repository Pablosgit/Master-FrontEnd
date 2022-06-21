import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  locationCollection: string;
  episodeCollection: string;
  getCharacter: string;
  getLocation: string;
  getEpisode: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/character',
  locationCollection: '/location',
  episodeCollection: '/episode',
  getCharacter: '/character/:id',
  getLocation: '/location/:id',
  getEpisode: '/episode/:id'
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'getCharacter'> {
  getCharacter: NavigationFunction;
}


export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  getCharacter: (id) => generatePath(switchRoutes.getCharacter, { id }),
};

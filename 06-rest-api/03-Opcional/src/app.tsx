import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProviderComponent } from 'core/theme';
import { RouterComponent } from 'core/router';
import {InputFindProvider} from "./common/provider/inputfind-context.provider";
import {PageNumProvider} from "./common/provider/page-context.provider";


const App: React.FunctionComponent = () => {
  return <RouterComponent />;
};

const AppProviders: React.FunctionComponent = () => {
  return (
    <ThemeProviderComponent>
      <InputFindProvider>
        <PageNumProvider>
          <App />
        </PageNumProvider>
      </InputFindProvider>
    </ThemeProviderComponent>
  );
};

export default hot(AppProviders);

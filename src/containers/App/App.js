import React , {lazy ,Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@material-ui/core';
import './App.css';
import { useIntl } from 'react-intl';
const Home = lazy(() => import('../Home'));


const App = () =>  {
  return (
      <Suspense
          fallback={
              <Backdrop open>
                  <CircularProgress />
              </Backdrop>
          }
      >
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </Suspense>
  );
}

export default App;

import React, {Suspense} from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import SpeechSynthesis from './containers/SpeechSynthesis/SpeechSynthesis';
import Nav from './components/Nav/Nav';


const app = props => {

  const Vocabulary = React.lazy(() => {
    return import('./containers/Vocabulary/Vocabulary')
  });
  
  

    let routes = (
      <Switch>
        <Route path="/voc" render={props => <Vocabulary {...props} />} />
        <Route path="/" exact component={SpeechSynthesis} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      //<SpeechSynthesis/>
      <React.Fragment>
        <Nav/>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>

      
      </React.Fragment>
     
      
    )
  
};

export default app;

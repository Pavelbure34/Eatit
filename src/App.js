import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {IonApp} from '@ionic/react';
// import { IonApp, IonRouterOutlet } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
import {Signin, Signup} from './pages';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.scss';

const App = ()=>{
  const [isSignedIn, setIsSignedIn] = useState(false);
  // const [permission, setPersmission] = useState(0);

  useEffect(()=>{
    setIsSignedIn(false);
  });

  const renderPages = ()=>{
    return (isSignedIn)?
    <>
    </>:
    <>
      <Route exact path="/signin">
        <Signin onSignin={()=>alert("signin!")}/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
      <Route exact path="/forgotpassword">
        <Signup/>
      </Route>
      <Redirect to="/signin"/>
    </>;
  };

  return (
    <IonApp>
      <Router>
        <Switch>
          {renderPages()}
        </Switch>
      </Router>
    </IonApp>
  );
};

export default App;

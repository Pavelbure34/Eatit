import React, {useState, useEffect} from 'react';
import {CheckCurrentUser} from './funcs';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {IonApp} from '@ionic/react';
import {
  Signin, Signup, ForgotPasswordPage,
  Home
} from './pages';

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
  const [userData, setUserData] = useState({});

  useEffect(()=>{
    CheckCurrentUser(()=>{
      setIsSignedIn(true)
    });
  });

  const renderPages = ()=>{
    return (isSignedIn)?
    <>
      <Route exact path="/home">
        <Home onSignOut={()=>setIsSignedIn(false)}/>
      </Route>
      <Redirect to="/home"/>
    </>:
    <>
      <Route exact path="/signin">
        <Signin onSignin={()=>setIsSignedIn(true)}/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
      <Route exact path="/forgotpassword">
        <ForgotPasswordPage/>
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

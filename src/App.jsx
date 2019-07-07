import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import TapList from './TapList';
import Error404 from './Error404';

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={TapList} />
                <Route path='/newkeg' component={NewKegForm} />
                <Route path='/editkeg' component={EditKegForm} />                
                <Route component={Error404} />
            </Switch>
        </div> 
    );
}

export default App;
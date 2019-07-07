import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Keg from './Keg';
import AddNewKeg from './AddNewKeg';
import EditKeg from './EditKeg';
import TapList from './TapList';
import Error404 from './Error404';

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={TapList} />
                <Route component={Error404} />
            </Switch>
        </div> 
    );
}

export default App;
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Header from './Header';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import TapList from './TapList';
import Error404 from './Error404';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            masterTapList: []
        };
        this.handleAddingNewKegToTapList = this.handleAddingNewKegToTapList.bind(this);
    }

    handleAddingNewKegToTapList(newKeg) {
        var newMasterTapList = this.state.masterTapList.slice();
        newMasterTapList.push(newKeg);
        this.setState({masterTapList: newMasterTapList});
    }


    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' render={() => <TapList tapList={this.state.masterTapList}/>} />
                    <Route path='/newkeg' component={NewKegForm} />
                    <Route path='/editkeg' component={EditKegForm} />                
                    <Route component={Error404} />
                </Switch>
            </div> 
        );
    }
}

export default App;
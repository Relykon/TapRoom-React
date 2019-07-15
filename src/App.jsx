import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Moment from 'moment';
import Header from './Header';
import TapList from './TapList';
import Error404 from './Error404';
import NewKegControl from './NewKegControl';
// import EditKegControl from './EditKegControl';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            masterTapList: [
                {
                    beerName: 'Duff',
                    brewery: 'Duff Brewing',
                    cost: '$5',
                    abv: '6%'
                },
                {
                    beerName: 'Super Duff',
                    brewery: 'Duff Brewing',
                    cost: '$5',
                    abv: '6.5%'
                },
                {
                    beerName: 'The Right Duff Baby',
                    brewery: 'Duff Brewing',
                    cost: '$5',
                    abv: '6.9%'
                }
            ]
            // selectedKeg: null
        };
        this.handleAddingNewKegToTapList = this.handleAddingNewKegToTapList.bind(this);
        this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
        // this.handleUpdatingEditedKegInTapList = handleUpdatingEditedKegInTapList.bind(this);
    }

    handleChangingSelectedKeg(keg) {
        this.setState({selectedKeg: keg}, () => alert('the selected Keg is now: ' + this.state.selectedKeg.id))
    }

    handleAddingNewKegToTapList(newKeg) {
        var newMasterTapList = this.state.masterTapList.slice();
        newMasterTapList.push(newKeg);
        this.setState({masterTapList: newMasterTapList});
    }

    // handleUpdatingEditedKegInTapList(editedKeg) {
    //     var newMasterTapList = this.state.masterTapList.slice();
    //     newMasterTapList.
    // }


    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' render={() => <TapList tapList={this.state.masterTapList}/>} />
                    <Route path='/newkeg' render={() => <NewKegControl onNewKegCreation={this.handleAddingNewKegToTapList} />} />
                    {/* <Route path='/editkeg' render={() => <EditKegControl tapList={this.state.masterTapList} currentRouterPath={props.location.pathname} onKegSelection={this.handleChangingSelectedKeg} selectedKeg={this.state.selectedKeg} />} />                 */}
                    <Route component={Error404} />
                </Switch>
            </div> 
        );
    }
}

export default App;

// onFinishedEditingKeg = { this.handleUpdatingEditedKegInTapList }
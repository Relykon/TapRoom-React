import React from 'react';
import kegs from './assets/images/kegs.jpg';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props) {
    let _beerName = null;
    let _brewery = null;
    let _cost = null;
    let _abv = null;

    function handleNewKegFormSubmission(event) {
        event.preventDefault();
        props.onNewKegCreation({beerName: _beerName.value, brewery: _brewery.value, cost: _cost.value, abv: _abv.val, id: v4()});
        _beerName.value = '';
        _brewery.value = '';
        _cost.value = '';
        _abv.value = '';
    }

    return (
        <div>
            <style jsx>{`
            .alignCenter {
                text-align: center;
            }
            `}</style>
            <form className ='alignCenter' onSubmit={handleNewKegFormSubmission}>
                <input
                    type='text'
                    id='beerName'
                    placeholder='Beer Name' 
                    ref={(input) => {_beerName = input;}} />
                <input
                    type='text'
                    id='brewery'
                    placeholder='Brewery'
                    ref={(input) => {_brewery = input;}} />
                <input 
                    type='text'
                    id='cost'
                    placeholder='Cost per Pint'
                    ref={(input) => {_cost = input;}} />
                <input 
                    type='text'
                    id='abv'
                    placeholder='% Alcohol by Volume'
                    ref={(input) => {_abv = input;}} />
                <button type='submit'>Add Keg</button>
            </form>
            <img src={kegs} />
        </div>
    );    
}

NewKegForm.propTypes = {
    onNewKegCreation: PropTypes.func
};

export default NewKegForm;
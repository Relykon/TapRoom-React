import React from 'react';
import kegs from '../src/assets/images/kegs.jpg';

function NewKegForm() {
    return (
        <div>
            <form>
                <input
                    type='text'
                    id='beerName'
                    placeholder='Beer Name' />
                <input
                    type='text'
                    id='breweryName'
                    placeholder='Brewery Name' />
                <input 
                    type='text'
                    id='cost'
                    placeholder='Cost per Pint' />
                <input 
                    type='text'
                    id='abv'
                    placeholder='% Alcohol by Volume' />
                <button type='submit'>Add Keg</button>
            </form>
            <img src={kegs} />
        </div>
    )
    
}
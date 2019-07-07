import React from 'react';
import keg from './assets/images/keg.jpg';

function EditKegForm() {
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
                <button type='submit'>Edit Keg</button>
            </form>
            <img src={keg} />
        </div>
    );
}

export default EditKegForm;
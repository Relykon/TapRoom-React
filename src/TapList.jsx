import React from 'react';
import Keg from './Keg';

var masterKegList = [
    {
        beerName: 'Duff',
        breweryName: 'Duff Brewing',
        price: '$5',
        abv: '6%'
    },
    {
        beerName: 'Dufff',
        breweryName: 'Duff Brewing',
        price: '$5',
        abv: '6.5%'
    },
    {
        beerName: 'Duffff',
        breweryName: 'Duff Brewing',
        price: '$5',
        abv: '6.9%'
    }
];

function TapList() {
    return (
        <div>
            {masterKegList.map((keg, index) =>
                <Keg beerName={keg.beerName}
                    breweryName={keg.breweryName}
                    price={keg.price}
                    abv={keg.abv}
                    key={index} />
            )}
        </div>
    );
}

export default TapList;
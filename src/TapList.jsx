import React from 'react';
import Keg from './Keg';

var masterKegList = [
    {
        beerName: 'Duff',
        brewery: 'Duff Brewing',
        price: '$5',
        abv: '6%'
    },
    {
        beerName: 'Dufff',
        brewery: 'Duff Brewing',
        price: '$5',
        abv: '6.5%'
    },
    {
        beerName: 'Duffff',
        brewery: 'Duff Brewing',
        price: '$5',
        abv: '6.9%'
    }
];

function TapList() {
    return (
            <div>
                {masterKegList.map((keg, index) =>
                    <Keg beerName={keg.beerName}
                    brewery={keg.brewery}
                    price={keg.price}
                    abv={keg.abv}
                    key={index} />
                    )}
            </div>
    );
}

export default TapList;
import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

// var masterTapList = [
//     {
//         beerName: 'Duff',
//         brewery: 'Duff Brewing',
//         cost: '$5',
//         abv: '6%'
//     },
//     {
//         beerName: 'Dufff',
//         brewery: 'Duff Brewing',
//         cost: '$5',
//         abv: '6.5%'
//     },
//     {
//         beerName: 'Duffff',
//         brewery: 'Duff Brewing',
//         cost: '$5',
//         abv: '6.9%'
//     }
// ];

function TapList(props) {
    return (
        <div>
            {props.tapList.map((keg) =>
                <Keg beerName={keg.beerName}
                    brewery={keg.brewery}
                    cost={keg.cost}
                    abv={keg.abv}
                    currentRouterPath={props.currentRouterPath}
                    key={keg.id}
                    onKegSelection={props.onKegSelection} />
            )}
        </div>
    );
}

TapList.propTypes = {
    tapList: PropTypes.array,
    currentRouterPath: PropTypes.string,
    onKegSelection: PropTypes.func
};

export default TapList;
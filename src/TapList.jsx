import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

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
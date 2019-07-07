import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
    return (
        <div>
            <h3>{props.beerName}</h3>
            <h4>{props.breweryName}</h4>
            <h5>{props.cost}</h5>
            <h5>{props.abv}</h5>
        </div>
    );
}

Keg.propTypes = {
    beerName: PropTypes.string,
    breweryName: PropTypes.string,
    cost: PropTypes.string,
    abv: PropTypes.string
};

export default Keg;
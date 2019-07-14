import React from 'react';
import PropTypes from 'prop-types';
import barrel from './assets/images/barrel.jpg';

function Keg(props) {
    const kegInformation =
        <div style={{ display: 'inline-block', backgroundImage: 'url(' + barrel + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
            <style global jsx>{`
                .the-keg{
                    margin: 10px;
                    width: 120px;
                    color: blue;
                    text-align: center;
                    border: 2px solid brown;
                    border-radius: 5px;
                }
            `}</style>
            <div className='the-keg'>
                <h3>{props.beerName}</h3>
                <h4>{props.brewery}</h4>
                <h5>{props.cost}</h5>
                <h5>{props.abv} ABV</h5>
                <button>Sell Pint</button>
            </div>
        </div>
        if (props.currentRouterPath === '/editkeg') {
            return (
                <div onClick={() => { props.onKegSelection({ beerName: props.beerName, brewery: props.brewery, cost: props.cost, abv: props.abv }); }}>
                    {kegInformation}
                </div>
            );
        } else {
            return (
                <div>
                    {kegInformation}
                </div>
            );
        }
}

Keg.propTypes = {
    beerName: PropTypes.string.isRequired,
    brewery: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    currentRouterPath: PropTypes.string,
    onKegSelection: PropTypes.func
};

export default Keg;
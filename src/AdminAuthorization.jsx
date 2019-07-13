import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AdminAuthorization(props) {
    return (
        <div>
            <style jsx>{`
            .align-center{
                text-align: center;
            }
            `}</style>
            <div className='align-center'>
                <h4>Are you an authorized employee or admin of BrewHaven Brewery?</h4>
                <button onClick={props.onAdminConfirmation}>Yes</button>
                <h5>Oops, no! Please take me <Link to='/'>Back to Tap List!</Link></h5>
            </div>
        </div>
    );
}

AdminAuthorization.propTypes = {
    onAdminConfirmation: PropTypes.func
};

export default AdminAuthorization;
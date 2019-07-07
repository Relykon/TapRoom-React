import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <h1>BrewHaven</h1>
            <Link to='/'>Home</Link> | <Link to='/addkeg'>Add New Keg</Link> | <Link to='/editkeg'>Edit Keg(s)</Link>
        </div>
    );
}

export default Header;
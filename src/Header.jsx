import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div></div>
        <div>
            <h1>BrewHaven</h1>
            <Link to='/'>Home</Link> | <Link to='/newkeg'>Add New Keg</Link> | <Link to='/editkeg'>Edit Keg(s)</Link>
        </div>
    );
}

export default Header;
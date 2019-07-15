import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <style jsx>{`
                div {
                    text-align: center;
                    text-decoration: underline;
                }
            `}</style>
            <h1>BrewHaven</h1>
            <Link to='/'>Home</Link> | <Link to='/newkeg'>Add New Keg</Link>
            <hr/>
        </div>
    );
}

export default Header;

//  | <Link to='/editkeg'>Edit Keg(s)
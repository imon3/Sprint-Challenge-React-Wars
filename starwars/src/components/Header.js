import React from 'react';

function Header() {
    return (
        <header className="Header">
            <h1>React Wars</h1>
            <nav>
                <p><a href="index.html">Star Wars</a></p>
                <p><a href="dogs.html">Dog Page</a></p>
            </nav>
        </header>
    )
}

export default Header;
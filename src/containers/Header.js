import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light">
                <Link to='/' className="navbar-brand text-dark">FakeShop</Link>
            </nav>
        </div>
    )
}

export default Header

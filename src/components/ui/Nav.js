import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <nav>
        <Link to='/application'>Application</Link>
        <Link to='/dashboard'>Dashboard</Link>
    </nav>
)

export default Nav

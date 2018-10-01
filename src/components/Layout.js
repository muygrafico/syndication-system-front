import React from 'react'
import PropTypes from 'prop-types'
import Header from './ui/Header'
import Footer from './ui/Footer'
import NavBar from './ui/NavBar'
import routes from '../routes'
// require('../styles/scss/main.scss')
import '../styles/scss/main.scss'

const Layout = (props) => (
    <div className='layout'>
        <Header>
            <NavBar />
        </Header>
        <main>
            {props.children}
            {routes}
        </main>
        <Footer>
            <p>&copy; LendingFront {(new Date()).getFullYear()}</p>
        </Footer>
    </div>
)

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout

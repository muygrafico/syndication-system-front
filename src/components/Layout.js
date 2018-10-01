import React from 'react'
import PropTypes from 'prop-types'
import Header from './ui/Header'
import Footer from './ui/Footer'
import routes from '../routes'
import '../styles/scss/main.scss'

const Layout = (props) => (
    <div className='layout'>
        <Header />
        <main>
            {routes}
            {props.children}
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

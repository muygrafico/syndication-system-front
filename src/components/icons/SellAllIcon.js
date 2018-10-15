import React from 'react'
import Icon from '../../assets/icons/coin-icon.png'
import IconInverse from '../../assets/icons/coin-icon-inverse.png'
import PropTypes from 'prop-types'

const isolatedStyle = {
    width: '13px',
    height: '13px',
    border: 'none'
}

const SellAllIcon = (props) => (
    props.inverse
        ? <img className='sell-icon' style={{ ...isolatedStyle }} src={Icon} />
        : <img className='sell-icon-inverted' style={{ ...isolatedStyle }} src={IconInverse} />
)

SellAllIcon.propTypes = {
  inverse: PropTypes.bool
}

export default SellAllIcon

import React from 'react'
import PropTypes from 'prop-types'

const calculatedPercetage = (perc) => {
    return perc
}

const RemainingAmount = (props) => {
  const p = calculatedPercetage(props.percentage)
  return (
      <div className='remaining-amount'>
          <p className='remaining-amount__title'>Remainig amount $850.000 of $8.300.800</p>
          <div className='remaining-amount__percentage-bar-container'>
              <div
                style={{ width: `${p}%` }}
                className='remaining-amount__percentage-bar'
              />
          </div>
          <div className='remaining-amount__percentage-tags'>
              <p className='remaining-amount__tag'>0%</p>
              <p className='remaining-amount__tag'>100%</p>
          </div>
      </div>
    )
  }

RemainingAmount.propTypes = {
  percentage: PropTypes.number
}

export default RemainingAmount

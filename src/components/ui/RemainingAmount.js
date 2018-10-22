import React from 'react'
import PropTypes from 'prop-types'

const calculateTotal = (p) => {
    if (!p || p.length === 0) { return null }

    return p.purchases.reduce(function (accumulator, p) {
        return accumulator + p.sold
    }, 0)
}

const CalculatePercentage = (p, totalPurchases) => {
    if (!p || p.length === 0) { return null }

    const amount = p.amount
    return (totalPurchases * 100) / amount
}

const RemainingAmount = ({ productCRUD }) => {
    const totalPurchases = productCRUD ? calculateTotal(productCRUD) : 0
    const limitAmount = productCRUD && productCRUD.amount ? productCRUD.amount : 0
    const totalLeft = totalPurchases ? limitAmount - totalPurchases : 0
    const calculatedPercentage = CalculatePercentage(productCRUD, totalPurchases)

    return (
        <div className='remaining-amount'>
            <p className='remaining-amount__title'>
                Remainig amount ${totalLeft && totalLeft.toLocaleString()} of
                ${limitAmount && limitAmount.toLocaleString()}
            </p>
            <div className='remaining-amount__percentage-bar-container'>
                <div
                  style={{ width: `${calculatedPercentage}%` }}
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
  productCRUD: PropTypes.any
}

export default RemainingAmount

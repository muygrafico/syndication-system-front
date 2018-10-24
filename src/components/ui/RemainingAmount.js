import React from 'react'
import PropTypes from 'prop-types'

const calculateTotal = (p) => {
    // console.log(`p: ${p}`)
    // console.dir(p)
    console.dir(p)
    if (!p || p.length === 0) { return null }
    console.dir(p)
    return p.reduce(function (accumulator, p) {
        return accumulator + p.attributes.sold
    }, 0)
}

const CalculatePercentage = (amount, totalPurchases) => {
    if (!amount) { return null }
    // console.log('------')
    // console.log(p)
    // console.log('------')
    return (totalPurchases * 100) / amount
}

const RemainingAmount = ({ productSelected, products, productPurchases }) => {
    console.log(productPurchases)
    const product = productSelected[0]

    const amount = product &&
        product.attributes ? product.attributes.priceInDollars : null

    const totalPurchases = productPurchases
        ? calculateTotal(productPurchases)
        : 0

    const limitAmount = product && amount ? amount : 0
    const totalLeft = totalPurchases ? limitAmount - totalPurchases : 0
    const calculatedPercentage = CalculatePercentage(amount, totalPurchases)

    console.log('------')
    console.log(totalPurchases)
    console.log('------')

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
  productSelected: PropTypes.any,
  productPurchases: PropTypes.any,
  products: PropTypes.any
}

export default RemainingAmount

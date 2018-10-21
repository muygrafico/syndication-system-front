import React from 'react'
import RemainingAmount from './RemainingAmount'
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const productCRUD = {
    id: 235252523,
    totalAmount: 2523532,
    purchases: [
        {
            inverstorsName: 'Y Combinator',
            sold: 830800,
            purchasedPercentage: 10.7,
            amountLeft: 230800,
            remainingPercentage: 89.3
        },
        {
            inverstorsName: 'SassStr',
            sold: 830800,
            purchasedPercentage: 20,
            amountLeft: 230800,
            remainingPercentage: 89.3
        },
         {
            inverstorsName: 'IndieGo',
            sold: 830800,
            purchasedPercentage: 20,
            amountLeft: 230800,
            remainingPercentage: 89.3
        }
    ]
}

const ProductCrud = (props) => (
    <div className='product-crud'>
        <div>
            <div className='product-crud__header'>
                <h3 className='product-crud__id'>
                    Product ID {productCRUD.id}
                </h3>
            </div>
            <div className='product-crud__purchase-list'>
                <table className='product-crud__table'>
                    <thead>
                        <tr>
                            <th>Inverstors name</th>
                            <th>Sold</th>
                            <th>% Purchased</th>
                            <th>Left amount</th>
                            <th>% Remaining</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productCRUD &&
                        productCRUD.purchases.length > 0 &&
                        productCRUD.purchases.map((p, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            <span className='product-crud__text'>
                                                {p.inverstorsName}
                                            </span>
                                        </td>
                                        <td>
                                            <span className='product-crud__text'>
                                                ${p.sold.toLocaleString()}
                                            </span>
                                        </td>
                                        <td>
                                            <div className='circular-progressbar-container'>
                                                <CircularProgressbar
                                                  percentage={p.purchasedPercentage}
                                                  text={`${p.purchasedPercentage}`}
                                                  strokeWidth={4}
                                                  styles={{
                                                      path: { stroke: `rgba(60, 207, 199, 1)` },
                                                      text: { fill: 'rgba(0,0,0, .6)', fontSize: '22px' }
                                                  }}
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <span className='product-crud__text'>
                                                ${p.amountLeft.toLocaleString()}
                                            </span>
                                        </td>
                                        <td>
                                            <div className='circular-progressbar-container'>
                                                <CircularProgressbar
                                                  percentage={p.remainingPercentage}
                                                  text={`${p.remainingPercentage}`}
                                                  strokeWidth={4}
                                                  styles={{
                                                      path: { stroke: `#FF9804` },
                                                      text: { fill: 'rgba(0,0,0, .6)', fontSize: '22px' }
                                                  }}
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <button>&#9999;</button>
                                            <button>x</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <div className='product-crud__footer'>
            <RemainingAmount percentage={50} />
        </div>
    </div>
)

export default ProductCrud

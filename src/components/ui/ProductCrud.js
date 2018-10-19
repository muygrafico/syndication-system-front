import React from 'react'

const productCRUD = {
    id: 235252523,
    totalAmount: 2523532,
    purchases: [
        {
            inverstorsName: 'Y Combinator',
            sold: '07/07/2020',
            purchasedPercentage: '2.700.900',
            amountLeft: '2.700.900',
            remainingPercentage: '2.700.900'
        },
        {
            inverstorsName: 'Y Combinator',
            sold: '07/07/2020',
            purchasedPercentage: '2.700.900',
            amountLeft: '2.700.900',
            remainingPercentage: '2.700.900'
        }
    ]
}

const ProductCrud = (props) => (
    <div className='product-crud'>
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
                                    <td>{p.inverstorsName}</td>
                                    <td>{p.sold}</td>
                                    <td>{p.purchasedPercentage}</td>
                                    <td>{p.amountLeft}</td>
                                    <td>{p.remainingPercentage}</td>
                                    <td>
                                        <button>e</button>
                                        <button>x</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <div className='product-crud__footer'>
            <p>Product ID</p>
        </div>
    </div>
)

export default ProductCrud

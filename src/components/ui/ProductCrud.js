import React from 'react'

const ProductCrud = (props) => (
    <div className='product-crud'>
        <div className='product-crud__header'>
            <h3 className='product-crud__id'>Product ID</h3>
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
                    <tr>
                        <td>Y combinator</td>
                        <td>$830800</td>
                        <td>10.7</td>
                        <td>230800</td>
                        <td>89.3</td>
                        <td>
                            <button>e</button>
                            <button>x</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Y combinator</td>
                        <td>$830800</td>
                        <td>10.7</td>
                        <td>230800</td>
                        <td>89.3</td>
                        <td>
                            <button>e</button>
                            <button>x</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Y combinator</td>
                        <td>$830800</td>
                        <td>10.7</td>
                        <td>230800</td>
                        <td>89.3</td>
                        <td>
                            <button>e</button>
                            <button>x</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='product-crud__footer'>
            <p>Product ID</p>
        </div>
    </div>
)

export default ProductCrud

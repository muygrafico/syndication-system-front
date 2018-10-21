import React from 'react'
import ProductList from '../ui/ProductList'
import ProductItem from '../ui/ProductItem'
import ApplicationBox from '../ui/ApplicationBox'
import ProductCrud from '../ui/ProductCrud'
import ProductListConainer from '../containers/ProductListContainer'
import SellAllIcon from '../icons/SellAllIcon'

const ProductItems = [
    {
        id: 35352323521,
        date: '15/02/2018',
        amount: 300000,
        purchases: []
    },
     {
        id: 7854232322,
        date: '20/08/2017',
        amount: 150000,
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
]

const productCRUD = {
    id: 235252523,
    totalLoan: 300000,
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

const Application = () => {
    return (
        <div className='application'>
            <h2 className='application__title'>Advances for syndication</h2>
            <button className='application__add-button'><span>+</span></button>
            <ApplicationBox>
                <ProductListConainer>
                    <h4 className='product-list__header-title'>Select a product to syndicate</h4>
                    <ProductList>
                        {ProductItems.map(i => {
                            return (
                                <ProductItem
                                  date={i.date}
                                  amount={i.amount}
                                  id={i.id}
                                  key={i.id}
                            />
                            )
                        })
                        }
                    </ProductList>
                    <div className='product-list__bottom-controls'>
                        <button className='button'>
                            <span>Close</span>
                        </button>
                        <button className='button'>
                            <span className='product-list__bottom-controls-icon'>
                                <SellAllIcon />
                                <SellAllIcon inverse />
                            </span>
                            <span>Sell all</span>
                        </button>
                    </div>
                </ProductListConainer>
                <ProductCrud data={productCRUD} />
            </ApplicationBox>
        </div>
    )
}
export default Application

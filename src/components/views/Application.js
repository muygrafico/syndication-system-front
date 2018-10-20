import React from 'react'
import ProductList from '../ui/ProductList'
import ProductItem from '../ui/ProductItem'
import ApplicationBox from '../ui/ApplicationBox'
import ProductCrud from '../ui/ProductCrud'
import ProductListConainer from '../containers/ProductListContainer'
import SellAllIcon from '../icons/SellAllIcon'

const ProductItems = [
    {
         id: '35352323521',
        date: '07/07/2020',
        amount: '2.700.900'
    },
     {
         id: '35352323522',
        date: '07/07/2016',
        amount: '2.700.000'
    },
     {
         id: '35352323523',
        date: '07/07/2016',
        amount: '2.700.800'
    },
     {
         id: '35352323524',
        date: '07/07/2016',
        amount: '2.700.800'
    },
     {
         id: '35352323525',
        date: '07/07/2016',
        amount: '2.700.800'
    },
     {
         id: '35352323526',
        date: '07/07/2016',
        amount: '2.700.800'
    },
     {
         id: '35352323527',
        date: '07/07/2016',
        amount: '2.700.800'
    },
      {
         id: '35352323529',
        date: '07/07/2016',
        amount: '2.700.800'
    },
     {
         id: '35352323510',
        date: '07/07/2016',
        amount: '2.700.800'
    }
]

const Application = () => {
    return (
        <div className='application'>
            <h2 className='application__title'>Advances for syndication</h2>
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
                <ProductCrud />
            </ApplicationBox>
        </div>
    )
}
export default Application

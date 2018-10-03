import React from 'react'
import ProductList from '../ui/ProductList'
import ProductItem from '../ui/ProductItem'

const ProductItems = [
    {
         id: '35352323521',
        date: '07/07/2016',
        amount: '2.700.800'
    },
     {
         id: '35352323522',
        date: '07/07/2016',
        amount: '2.700.800'
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
         id: '35352323528',
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
            <h2>Advances for syndication</h2>
            <div className='application__box'>
                <div className='product-list'>
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
                </div>
            </div>
        </div>
    )
}
export default Application

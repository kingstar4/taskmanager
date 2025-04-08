import React from 'react'



const Display = () => {

    const getSum=()=>{
        const products =[
            {pName: 'Product 1', pPrice: 100},
            {pName: 'Product 2', pPrice: 250},
            {pName: 'Product 3', pPrice: 300},
            {pName: 'Product 2', pPrice: 405},
            {pName: 'Product 5', pPrice: 500},
            {pName: 'Product 6', pPrice: 621},
            {pName: 'Product 2', pPrice: 710},
        ]

    const total = products.reduce((acc, item) => acc + item.pPrice, 0);
        return (total);
    }

  return (
    <div>{getSum()}</div>
  )
}

export default Display;




import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const Price = () => {
    const [prices, setPrices] = useState([])

    useEffect(()=>{
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div className='m-12 '>
            <h2 className='text-5xl bg-green-500 text-center'>Awseome Affordable price</h2>
        <div className='md:grid grid-cols-4 gap-4 '>
            {
                prices.map(price => <PriceCart
                key={price.id}
                price={price}
                ></PriceCart>)
            }
        </div>
        </div>
    );
};

export default Price;
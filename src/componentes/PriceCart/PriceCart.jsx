import React from 'react';
import Features from '../Features/Features';

const PriceCart = ({price}) => {
    return (
        <div className=' bg-indigo-400 gap-4 mt-4 p-4 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-green-500 text-3xl font-bold '>{price.price}</span>
                <span className='text-yellow-50'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold text-center'>{price.name}</h5>
            <p className='text-yellow-50 underline font-bold'>features</p>
            {
                price.features.map((features, idx) => <Features
               key={idx}
                features = {features}
                ></Features> )
            }
            <button className='w-full mt-auto hover:bg-green-500 bg-green-400 rounded-md text-white top-full'>Bey now</button>
        </div>
    );
};

export default PriceCart; 
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({features}) => {
    return (
        <div className='flex items-center pl-4'>
             <CheckCircleIcon className="h-4 w-4 text-green-300" />
            <span className='pl-2 '>{features}</span>
        </div>
    );
};

export default Features;
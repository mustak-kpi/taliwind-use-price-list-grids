import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open , setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' }
      ];
    return (
        <nav className='bg-red-500'>
             <div onClick={()=>setOpen(!open)} className='md:hidden'>
                <span>
                    {
                       open === false ? 
                         <XMarkIcon className="h-6 w-6 text-red-800" />
                        : <Bars3Icon className="h-6 w-6 text-red-800" />
                    }
                </span>
             </div>
            <ul className={`md:flex absolute md:static duration-150 bg-red-600 pl-8 pb-4 py-2 ${open ? 'top-6' : '-top-36'}`}>
               {
                routes.map(route => <Link
                key={route.id}
                route={route}
                ></Link>)
               }
            </ul>            
        </nav>
    );
};

export default Navbar;
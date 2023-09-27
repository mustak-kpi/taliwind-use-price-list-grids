import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const PhoneBare = () => {
    const [phones, setPhones] = useState([]);

    useEffect(()=>{
        //  fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //  .then(res => res.json())
        //  .then(data => console.log(data))
 
       axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
       .then(data => {
        const phoneLodes = data.data.data;
        console.log(phoneLodes)
        const lodesData = phoneLodes.map(phone =>{
            const parst = phone.slug.split('-')
            const price = parseInt(parst[1]);
            const phoneInfo ={
                name : phone.phone_name,
                price : price
            }
            return phoneInfo;
        })
       console.log(lodesData)
       setPhones(lodesData)
       })
    },[])

    return (
        <div>
            <BarChart width={1000} height={500} data={phones}>
             <Cell></Cell>
             <XAxis dataKey="name"></XAxis>
             <YAxis></YAxis>
            <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default PhoneBare;
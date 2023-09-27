import { data } from 'autoprefixer';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Deashbord = () => {
 const    students = [
        {id: 1, name: "Student 1", math: 85, english: 78, bangla: 92},
        {id: 2, name: "Student 2", math: 92, english: 88, bangla: 75},
        {id: 3, name: "Student 3", math: 78, english: 95, bangla: 88},
        {id: 4, name: "Student 4", math: 88, english: 76, bangla: 82},
        {id: 5, name: "Student 5", math: 75, english: 82, bangla: 90},
        {id: 6, name: "Student 6", math: 90, english: 92, bangla: 85},
        {id: 7, name: "Student 7", math: 72, english: 68, bangla: 78},
        {id: 8, name: "Student 8", math: 76, english: 89, bangla: 94},
        {id: 9, name: "Student 9", math: 85, english: 80, bangla: 87},
        {id: 10, name: "Student 10", math: 88, english: 78, bangla: 91},
        {id: 11, name: "Student 11", math: 95, english: 85, bangla: 76},
        {id: 12, name: "Student 12", math: 82, english: 91, bangla: 88},
    ]

    return (
        <div>
           <AreaChart 
           width={500}
           height={400}
           data={students}
           >
            <Tooltip></Tooltip>
            <CartesianGrid></CartesianGrid>
            <ResponsiveContainer></ResponsiveContainer>
            <YAxis></YAxis>
            <XAxis></XAxis>
            <Area dataKey="math" stroke="#8884d8"></Area>
            <Area dataKey="bangla"  stroke='//#region '></Area>
           </AreaChart>
        </div>
    );
};

export default Deashbord;
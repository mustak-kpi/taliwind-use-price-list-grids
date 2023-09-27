import React from 'react';
// import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Varictial = () => {
    const    students = [
        {id: 1, name: "Student 1", math: 850, english: 781, bangla: 92},
        {id: 2, name: "Student 2", math: 920, english: 818, bangla: 75},
        {id: 3, name: "Student 3", math: 780, english: 951, bangla: 88},
        {id: 4, name: "Student 4", math: 880, english: 762, bangla: 82},
        {id: 5, name: "Student 5", math: 750, english: 822, bangla: 90},
        {id: 6, name: "Student 6", math: 900, english: 922, bangla: 85},
        {id: 7, name: "Student 7", math: 720, english: 680, bangla: 78},
        {id: 8, name: "Student 8", math: 760, english: 890, bangla: 94},
        {id: 9, name: "Student 9", math: 850, english: 800, bangla: 87},
        {id: 10, name: "Student 10", math: 808, english: 708, bangla: 91},
        {id: 11, name: "Student 11", math: 905, english: 850, bangla: 76},
        {id: 12, name: "Student 12", math: 802, english: 910, bangla: 88},
    ]

    return (
        <div>
            <LineChart
            width={500}
            height={300}
            data={students}
            >
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
               <Line dataKey="math"></Line>
               <Line dataKey="english" stroke="#8884d8"></Line>
            </LineChart>
        </div>
    );
};

export default Varictial;
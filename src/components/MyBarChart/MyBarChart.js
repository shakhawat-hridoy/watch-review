import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = (props) => {
    const data= props.chartData;
    return (
        <div className='border-2  border-green-200 rounded-lg p-4 shadow-lg'>
            <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Bar dataKey="revenue" fill="#8884d8"></Bar>
            <Bar dataKey="investment" fill="#82ca9d"></Bar>
        </BarChart>
        </div>
    );
};

export default MyBarChart;
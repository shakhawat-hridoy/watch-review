import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = (props) => {
    const data= props.chartData;
    return (
        <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey="sell" fill="#8884d8"></Bar>
            <Bar dataKey="investment" fill="##82ca9d"></Bar>
        </BarChart>
    );
};

export default MyBarChart;
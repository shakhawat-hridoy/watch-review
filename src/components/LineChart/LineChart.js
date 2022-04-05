import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = (props) => {
    const data= props.chartData;
    return (
                <LineChart width={500} height={300} data={data}>

                <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                </LineChart>
    );
};

export default MyLineChart;
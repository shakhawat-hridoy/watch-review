import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = (props) => {
    const data= props.chartData;
    return (
            <LineChart width={600} height={300} data={data}>
                <Line dataKey={"sell"}></Line>
                <CartesianGrid></CartesianGrid>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
    );
};

export default MyLineChart;
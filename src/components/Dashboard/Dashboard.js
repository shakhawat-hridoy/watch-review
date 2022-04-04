import React, { useEffect, useState } from 'react';
import LineChart from '../LineChart/LineChart';
import MyBarChart from '../MyBarChart/MyBarChart';


const Dashboard = () => {

    const[data,setData]= useState([]);

     useEffect( ()=>{
         fetch('data.json')
         .then(response=> response.json())
         .then(data=>setData(data));
     },[])
    return (
        <div className='flex justify-between p-16'>
            <LineChart chartData={data}></LineChart>
            <MyBarChart chartData={data}></MyBarChart>
        </div>
    );
};

export default Dashboard;
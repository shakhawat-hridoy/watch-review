import UseData from '../../Hooks/UseData';
import LineChart from '../LineChart/LineChart';
import MyBarChart from '../MyBarChart/MyBarChart';

const Dashboard = () => {
    const url='data.json';
    const [data, setData]=UseData(url);

    return (
        <div className='flex justify-between p-16'>
            <LineChart chartData={data}></LineChart>
            <MyBarChart chartData={data}></MyBarChart>
        </div>
    );
};

export default Dashboard;
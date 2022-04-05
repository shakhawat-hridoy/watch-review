import UseData from '../../Hooks/UseData';
import LineChart from '../LineChart/LineChart';
import MyBarChart from '../MyBarChart/MyBarChart';

const Dashboard = () => {
    const url='data.json';
    const [data, setData]=UseData(url);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-16'>
            <LineChart chartData={data}></LineChart>
            <MyBarChart chartData={data}></MyBarChart>
        </div>
    );
};

export default Dashboard;
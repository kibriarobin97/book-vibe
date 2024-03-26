import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../utils/utils";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';



const PageRead = () => {

    const [readBookChart, setReadBookChart] = useState([])

    useEffect(() => {
        const data = getDataFromLocalStorage()
        setReadBookChart(data);
    }, [])
    // console.log(readBookChart)
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    return (
        <div className="flex justify-center items-center">
            <BarChart
                width={1200}
                height={500}
                data={readBookChart}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {readBookChart.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PageRead;
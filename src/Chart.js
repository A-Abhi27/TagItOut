import React from 'react'
import { Bar, BarChart, XAxis, YAxis,Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = (props) => {
    const data = [
        {
            "Budget": props.m1,
            "Revenue": props.m2
        }
    ]

    return (
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart width="50%"
                    height="100%"
                    data={data}
                    margin={{
                        top: 40,
                        right: 30,
                        left: 40,

                    }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Budget" fill="#FF7B54" />
                    <Bar dataKey="Revenue" fill="green" />
                </BarChart>
            </ResponsiveContainer>
    )
}
export default Chart;


import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieChartComponent({ userData }) {

  // Check if userData is empty before performing reduce
  const cityCounts = userData.length > 0 ? userData.reduce((acc, user) => {
    const { address } = user;
    const city = address.city;

    if (!acc[city]) {
      acc[city] = 1;
    } else {
      acc[city] += 1;
    }

    return acc;
  }, {}) : {};

  // Convert cityCounts to an array of objects for Pie Chart
  const pieChartData = Object.keys(cityCounts).map((city) => ({
    name: city,
    value: cityCounts[city],
  }));

  return (
    <div style={{ width: '100%' }}>
      <p style={{ textAlign: 'center' }}>Users by city</p>
      <PieChart
        series={[
          {
            data: pieChartData,
            arcLabel: (data) => `${data.name} (${data.value})`, // Updated arcLabel function
            arcLabelMinAngle: 45,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        width={300}
        height={265}
      />
    </div>
  );
}

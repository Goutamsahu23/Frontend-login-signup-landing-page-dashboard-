import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarChartByCompany({ userData }) {
  // Check if userData is defined and is an array
  if (!userData || !Array.isArray(userData) || userData.length === 0) {
    // Handle the case where userData is undefined, not an array, or empty
    return <div>Error: Invalid userData</div>;
  }

  // Extract company names and their counts
  const companyCounts = userData.reduce((acc, user) => {
    const { company } = user;
    const companyName = company && company.name; // Add a check for company existence

    if (companyName) {
      if (!acc[companyName]) {
        acc[companyName] = 1;
      } else {
        acc[companyName] += 1;
      }
    }

    return acc;
  }, {});

  // Check if there are companies to display
  if (Object.keys(companyCounts).length === 0) {
    return <div>No data available for chart</div>;
  }

  // Convert companyCounts to an array of objects for BarChart
  const barChartData = {
    xAxis: [{ scaleType: 'band', data: Object.keys(companyCounts) }],
    series: [{ data: Object.values(companyCounts) }],
  };

  return (
    <div>
        <p style={{textAlign:'center'}}>Users by Company</p>
        <BarChart
      {...barChartData}

      height={300}
    />

    </div>
    
  );
}

import React, { useState } from 'react';
import { Bar,Pie } from 'react-chartjs-2';
import { Chart as ChartJS,ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    BarElement,
    ArcElement,
    
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const PartyVotesChart = ({ partyVotesData }) => {
  const [selectedYear, setSelectedYear] = useState(''); // State for selected year

  // Extract data for Chart.js
  const parties = partyVotesData.parties;
  const labels = Object.keys(parties[0].votes);

  // Apply filter for selected year
  const filteredData = selectedYear
    ? parties.map(party => party.votes[selectedYear])
    : parties.map(party => Object.values(party.votes).reduce((acc, curr) => acc + curr, 0));

  // Define bar colors
  const colors = parties.map(party => party.color);

  // Calculate the bar width dynamically based on the number of parties
  const barWidth = 0.8; // Adjust the width as needed

  return (
    <div>
     
      <div className='p-2 bg-slate-400' style={{ position: 'relative', top: 0, right: 0 }}>
        <label>
          Filter by Year:
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            <option value="">All</option>
            {labels.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </label>
          </div>
          

      <Bar className='bg-blue-100'
        data={{
          labels: parties.map(party => party.name),
          datasets: [
            {
              label: selectedYear ? `Votes in ${selectedYear}` : 'Total Votes',
              data: filteredData,
              backgroundColor: colors,
              borderWidth: 1
            }
          ]
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Votes'
              }
            },
            x: {
              type: 'category',
              title: {
                display: true,
                text: 'Political Party'
              },
              offset: true // Enable dynamic offset adjustment
            }
          },
          plugins: {
            legend: {
              position: 'top',
            }
          },
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10
            }
          },
          indexAxis: 'x',
          barPercentage: barWidth, // Set the bar width dynamically
          categoryPercentage: 1, // Adjust category percentage to fit bars properly
          barThickness: 'flex', // Use flexible bar thickness
        }}
      />
    </div>
  );
}

export default PartyVotesChart;


// to make different type of shape change the only shape name tagcls

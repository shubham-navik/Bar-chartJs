// App.js

import React from 'react';
import PartyVotesChart from './components/PartyVotesChart.jsx';
import partyVotesData from './data/partyVotesData.json'; // Import your JSON data

const App = () => {
  return (
    <div>
      <h1 className='py-5'>Political Party Votes</h1>
      
      <div className='w-[40%] h-[70%] '>
        
      <PartyVotesChart  partyVotesData={partyVotesData} />
    </div>
      
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Results from './Results';
import Dropdown from './Dropdown';

import './App.css';

function App() {
  const [germanyData, setGermanyData] = useState({});
  const [stateData, setStateData] = useState({});
  const [selectedState, setSelectedState] = useState('');
  //Loading states
  const [isLoadingGermanyData, setIsLoadingGermanyData] = useState(true);
  const [isLoadingStateData, setIsLoadingStateData] = useState(true);

  useEffect(() => {
    // Fetch Germany data by default when the component is first mounted
    fetchGermanyData();
  }, []);

  const fetchGermanyData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/germany');
      setGermanyData(response.data);
      setIsLoadingGermanyData(false);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataByState = async (state) => {
    try {
      if (state) {
        const response = await axios.get(`http://localhost:3001/germany/${state}`);
        setStateData(response.data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingStateData(false); 
    }
  };

  // Fetch data only when a state is selected from the dropdown
  useEffect(() => {
    fetchDataByState(selectedState);
  }, [selectedState]);

  return (
    <div className="app-container">
      <h1>Covid-19</h1>

      <div className="content-container"> 
        <h2>Germany</h2>
        {isLoadingGermanyData ? (
          <p className="loading">Loading Germany data...</p> 
        ) : (
          <Results data={germanyData} />
        )}

        <div className='state-container'>
          <h3>Choose a state in Germany for specific information</h3>
          <Dropdown selectedState={selectedState} onChange={setSelectedState} />
          {selectedState && (
            <div>
              {isLoadingStateData ? (
                <p className="loading">Loading state-specific data...</p>
              ) : (
                <Results data={stateData} selectedState={selectedState} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

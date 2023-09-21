import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Results from './Results';
import Dropdown from './Dropdown';

function App() {
  const [germanyData, setGermanyData] = useState({});
  const [stateData, setStateData] = useState({});
  const [isLoadingGermanyData, setIsLoadingGermanyData] = useState(true);
  const [isLoadingStateData, setIsLoadingStateData] = useState(false);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    // Fetch Germany data by default when the component is first mounted
    fetchGermanyData();
  }, []);

  const fetchGermanyData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/data');
      setGermanyData(response.data);
      setIsLoadingGermanyData(false);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataByState = async (state) => {
    setIsLoadingStateData(true); // Set loading state to true when fetching state-specific data
    try {
      if (state) {
        const response = await axios.get(`http://localhost:3001/api/data/${state}`);
        setStateData(response.data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingStateData(false); // Set loading state to false after fetching state-specific data
    }
  };

  // This useEffect will run whenever selectedState changes, and it will fetch state-specific data.
  useEffect(() => {
    fetchDataByState(selectedState);
  }, [selectedState]);

  return (
    <div className="App">
      <h1>Covid-19 Data</h1>

      {/* Render the Results component for Germany data */}
      <h2>Germany:</h2>
      {isLoadingGermanyData ? "Loading Germany data..." : <Results data={germanyData} /> }
      
      {/* Render the dropdown and Results component for state-specific data */}
      <div>
        <h3>Choose a state in Germany for specific information</h3>
        {/* Dropdown handles state selection */}
        <Dropdown selectedState={selectedState} onChange={setSelectedState} />
        {selectedState && (
          <div>
            {isLoadingStateData ? "Loading state-specific data..." : <Results data={stateData} selectedState={selectedState} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
 
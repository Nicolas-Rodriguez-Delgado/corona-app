import React from 'react';

function Results({ data, selectedState }) {
    let stateData = {};

  if (selectedState) {
    stateData = data[selectedState] || {};
  } else {
    stateData = data;
  }
  return (
    <div>
      {stateData && stateData.abbreviation && <p>{stateData.name}</p>}
      <p>Total Cases: {stateData.cases}</p>
      <p>Total Deaths: {stateData.deaths}</p> 
    </div>
  );
}

export default Results;

import React from 'react';
import './results.css';

function Results({ data, selectedState }) {
  let stateData = {};

  if (selectedState) {
    stateData = data[selectedState] || {};
  } else {
    stateData = data;
  }

  const formattedCases = stateData.cases?.toLocaleString() || 'N/A';
  const formattedDeaths = stateData.deaths?.toLocaleString() || 'N/A';
  const formattedCasesPerWeek = stateData.casesPerWeek?.toLocaleString() || 'N/A';
  const formattedRecovered = stateData.recovered?.toLocaleString() || 'N/A';

  return (
    <>
      {stateData && stateData.abbreviation && <h4>{stateData.name}</h4>}
      <div className="results-container">
       <div className="box">
        <p>Total Cases:</p>
        <span className="variable">{formattedCases}</span>
        </div>
       <div className="box">
        <p>Total Deaths:</p>
        <span className="variable red">{formattedDeaths}</span>
       </div>
       <div className="box">
        <p>Cases per Week:</p>
        <span className="variable">{formattedCasesPerWeek}</span>
       </div>
       <div className="box">
        <p>Recovered:</p>
        <span className="variable green">{formattedRecovered}</span>
       </div>
       <div className="box">
        <p>Total Deaths:</p>
        <span className="variable red">{formattedDeaths}</span>
       </div>
      </div>
    </>
  );
}

export default Results;

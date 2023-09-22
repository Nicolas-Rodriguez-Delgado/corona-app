import React from 'react';

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
     <div>
       {stateData && stateData.abbreviation && <h4>{stateData.name}</h4>}
       <p>Total Cases: {formattedCases}</p>
       <p>Total Deaths: {formattedDeaths}</p>
       <p>Cases per Week: {formattedCasesPerWeek}</p>
       <p>Recovered: {formattedRecovered}</p>
       <p>Total Deaths: {formattedDeaths}</p>
     </div>
   );
 }
 
 export default Results;

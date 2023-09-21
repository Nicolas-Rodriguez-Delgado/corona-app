import React from 'react';

function Dropdown({ selectedState, onChange }) {

    const handleSelectChange = (e) => {
      const selectedValue = e.target.value;
      onChange(selectedValue);
    };
  
    return (
      <div>
        <label htmlFor="stateDropdown">Select a State:</label>
        <select
          id="stateDropdown"
          onChange={handleSelectChange}
          value={selectedState}
        >
          <option value="" disabled>Select a state</option>
        <option value="SH">Schleswig-Holstein</option>
        <option value="HH">Hamburg</option>
        <option value="NI">Niedersachsen</option>
        <option value="HB">Bremen</option>
        <option value="NW">Nordrhein-Westfalen</option>
        <option value="HE">Hessen</option>
        <option value="RP">Rheinland-Pfalz</option>
        <option value="BW">Baden-Württemberg</option>
        <option value="BY">Bayern</option>
        <option value="SL">Saarland</option>
        <option value="BE">Berlin</option>
        <option value="BB">Brandenburg</option>
        <option value="MV">Mecklenburg-Vorpommern</option>
        <option value="SN">Sachsen</option>
        <option value="ST">Sachsen-Anhalt</option>
        <option value="TH">Thüringen</option>
        </select>
      </div>
    );
  }

export default Dropdown;



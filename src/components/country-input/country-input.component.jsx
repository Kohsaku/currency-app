import React from 'react';

import './country-input.styles.scss';

const CountryInput = props => (
  <div className="countryInput">
    <form onSubmit={props.onSubmit}>
    <label>
      <span className="label">Country name:</span>
      <select className="select" onChange={props.onChange}>
        <option className="option" value=''>select a country</option>
        {props.countryName.map(country =>(
          <option>{country.country[0].name}</option>
        ))}
      </select>
    </label>
    <input className="submit" type="submit" value="Submit" />
    </form>
  </div>
);

export default CountryInput;

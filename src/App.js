import React from 'react';
import CountryInput from './components/country-input/country-input.component';
import CurrencyView from './components/currency-view/currency-view.component'
import COUNTRY_CURRENCY_DATA from './country-currency.data';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCurrency: COUNTRY_CURRENCY_DATA,
      searchField: '',
      renderCurrency: ''
    };
    this.countryHandleChange = this.countryHandleChange.bind(this);
    this.countryHandleSubmit = this.countryHandleSubmit.bind(this);
  }

  countryHandleChange(event) {
    console.log(event.target.value);
    this.setState({searchField: event.target.value});
  }

  countryHandleSubmit(event) {
    const selectedCountry = this.state.searchField;
    if (selectedCountry === "America") {
      this.setState({renderCurrency: "$"})
    }
    else if(selectedCountry === "Japan") {
      this.setState({renderCurrency: "¥"})
    }
    else if(selectedCountry === "Britain") {
      this.setState({renderCurrency: "£"})
    }
    else if(selectedCountry === "Sweden") {
      this.setState({renderCurrency: "krona"})
    }
    else if(selectedCountry === "Facebook") {
      this.setState({renderCurrency: "Libra"})
    }
    else {this.setState({renderCurrency: ""})};
    event.preventDefault();
  }

  render() {
    const countryCurrency = this.state.countryCurrency;
    const renderCurrency = this.state.renderCurrency;
    return (
      <div className="app">
        <CountryInput countryName={countryCurrency} onChange={this.countryHandleChange} onSubmit={this.countryHandleSubmit}/>
        <CurrencyView currency={renderCurrency}/>
      </div>
    )
  }
}
export default App;

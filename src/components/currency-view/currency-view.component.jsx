import React from 'react';
import './currency-view.styles.scss';

const CurrencyView = props => (
  <div className="currencyView">
    {props.currency}
  </div>
);

export default CurrencyView;

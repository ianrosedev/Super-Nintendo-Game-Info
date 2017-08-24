import React from 'react';
import './Spinner.css';

const Spinner = () => (
  <div className='spinner'>
    <i className='fa fa-spinner fa-pulse fa-3x fa-fw'></i>
    <span className='sr-only'>Loading...</span>
  </div>
);

export default Spinner;

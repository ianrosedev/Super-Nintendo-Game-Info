import React from 'react';
import './Spinner.scss';

const Spinner = () => (
  <div className='spinner'>
    <i className='fa fa-spinner fa-pulse fa-3x fa-fw' />
    <span className='sr-only'>Loading...</span>
  </div>
);

export default Spinner;

import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const Title = ({ title }) => <h3 className='title'>{title}</h3>;

Title.propTypes = propTypes;

export default Title;

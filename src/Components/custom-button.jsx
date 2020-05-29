import React from 'react';
import './styles/custom-button.scss'

const CustomButton = ({ children,...props}) => (
  <div className="custom-button" {...props}>{children}</div>
);

export default CustomButton;

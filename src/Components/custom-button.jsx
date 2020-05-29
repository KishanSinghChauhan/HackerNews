import React from 'react';


const CustomButton = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export default CustomButton;

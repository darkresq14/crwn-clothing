import React from 'react';

import './custom-button.styles.scss';

const CustomButton = (props) => (
  <button className={`${props.isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...props}>
    {props.children}
  </button>
);

export default CustomButton;
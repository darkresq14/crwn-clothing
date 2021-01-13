import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

// import './custom-button.styles.scss';

const CustomButton = (props) => (
  <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  // <button
  //   className={`${props.isgooglesignin === 'true' ? 'google-sign-in' : ''} ${
  //     props.inverted === 'true' ? 'inverted' : ''
  //   } custom-button`}
  //   {...props}
  // >
  //   {props.children}
  // </button>
);

export default CustomButton;

import React from 'react';

import './form-input.styles.scss';

// ! Typescript issues
// const FormInput = ({ handleChange, label, ...otherProps }) => (
//   <div className='group'>
//     <input className='form-input' onChange={handleChange} {...otherProps} />
//     {
//       label ?
//         (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input`}>
//           {label}
//         </label>)
//         : null
//     }
//   </div>
// );

const FormInput = (props) => (
  <div className='group'>
    <input className='form-input' {...props} />
    {
      props.label ?
        (<label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
          {props.label}
        </label>)
        : null
    }
  </div>
);

export default FormInput;
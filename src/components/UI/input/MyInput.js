import React from 'react';
import './MyInput.scss';

function MyInput(props) {
  return (
    <input className='myInput' type='text' {...props}  />
  )
}

export default MyInput;
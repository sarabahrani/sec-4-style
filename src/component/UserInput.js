import React from 'react';

const UserInput = (props) => <input type="text" onChange={props.change} value={props.value} className = {props.classes} />
export default UserInput;
import React from 'react';

const Validation = (props) => {
    let outputMessage = "";
    let classes = [];
    if (props.count > 5) {
        outputMessage = "Out put is too long";
     classes.push("red");
    }
    else if (props.count < 5 && props.count > 0) {
        outputMessage = "string is too short";
     classes.push("blue");
    }
    return <p className= {classes.join(' ')}>{outputMessage} </p>
}

export default Validation;
import React from 'react';
import classes from "./FirstInput.module.css";
const FirstInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.firstInput} {...props}/>
    );
});
export default FirstInput;
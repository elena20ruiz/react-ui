import React from 'react';
import PropTypes from 'prop-types';

import "./Buttons.scss";
const Button  = ({
    text = "",
    type = "primary",
    onClick = () => {}
}) => {
    return <button onClick={onClick} className={`btn btn-${type}`}>
                {text}
            </button>;
}


Button.propTypes = {
    type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    text: PropTypes.string,
    onClick: PropTypes.func
}



export default Button;
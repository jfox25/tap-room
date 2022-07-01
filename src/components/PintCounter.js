import PropTypes from "prop-types";
import React from "react";

function PintCounter(props)
{
    return(
        <React.Fragment>
            <p>Remianing Pints : {props.pints}</p>
            <button onClick = {() => props.whenPintSold(props.id)}>Sell Pint</button> 
        </React.Fragment>
    )
 
}
PintCounter.propTypes = {
    pints: PropTypes.number,
    whenPintSold: PropTypes.func 
  };
export default PintCounter;
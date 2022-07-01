import PropTypes from "prop-types";
import React from "react";
import './PintCounter.css'

function PintCounter(props)
{
    return(
        <div className="pint-counter">
            <h3><span className="accent-color">Remaining Pints :</span> {props.pints}</h3>
            <button className="sell-button" onClick = {() => props.whenPintSold(props.id)}>Sell a Pint</button> 
        </div>
    )
 
}
PintCounter.propTypes = {
    pints: PropTypes.number,
    whenPintSold: PropTypes.func 
  };
export default PintCounter;
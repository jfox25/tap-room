import React from "react";
import PropTypes from "prop-types";

function Keg(props)
{
    return (
        <React.Fragment>
          <h3>Name : {props.name}</h3>
          <h3>Brand : {props.brand}</h3>
          <h3>Alcohol Content : {props.alcoholContent}%</h3>
          <h4>Price per Pint : ${Math.ceil(props.price/ 120 * 100) / 100}</h4>
          <h4>Price per Keg : ${props.price}</h4>
          <hr/>
        </React.Fragment>
      );
}

Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    alcoholContent: PropTypes.number,
  };

export default Keg;
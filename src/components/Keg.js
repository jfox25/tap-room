import React from "react";
import PropTypes from "prop-types";
import PintCounter from "./PintCounter";
import './Keg.css'

function Keg(props)
{
    return (
        <div className="keg">
            <div className="keg-clickable" onClick = {() => props.whenKegClicked(props.id)}>
                <h2 className="keg-name">{props.name}</h2>
                <div className="keg-details">
                    <h3><span className="accent-color">Brand :</span> {props.brand}</h3>
                    <h3><span className="accent-color">Alcohol Content :</span> {props.alcoholContent}%</h3>
                </div>
                <h4><span className="accent-color">Price per Pint :</span> ${Math.ceil(props.price/ 120 * 100) / 100}</h4>
                <h4><span className="accent-color">Price per Keg :</span>${props.price}</h4>
            </div>
            <PintCounter whenPintSold = {props.onPintSale} id = {props.id} pints = {props.pints} />
        </div>
      );
}

Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    alcoholContent: PropTypes.number,
    id: PropTypes.string, 
    whenKegClicked: PropTypes.func,
    onPintSale : PropTypes.func
  };

export default Keg;
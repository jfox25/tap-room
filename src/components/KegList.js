import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";
import './KegList.css'

function KegList(props)
{
   
    return (
        <div className="list">
          {props.kegList.map((keg) =>
            <Keg
              whenKegClicked = { props.onKegSelection }
              onPintSale = { props.onPintSale }
              name={keg.name}
              brand={keg.brand}
              price={keg.price}
              alcoholContent = {keg.alcoholContent}
              pints = {keg.pints}
              id={keg.id}
              key={keg.id}/>
          )}
        </div>
      );
}

KegList.propTypes = {
    kegList: PropTypes.array,
    onKegSelection: PropTypes.func,
    onPintSale : PropTypes.func
  };

export default KegList;
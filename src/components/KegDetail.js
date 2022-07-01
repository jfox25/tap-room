import React from "react";

function KegDetail(props){
    const { keg } = props;

    return (
      <React.Fragment>
        <h1>Keg Detail</h1>
        <hr/>
        <h3>Name : {keg.name}</h3>
        <h3>Brand : {keg.brand}</h3>
        <h3>Alcohol Content : {keg.alcoholContent}%</h3>
        <h4>Price per Pint : ${Math.ceil(keg.price/ 120 * 100) / 100}</h4>
        <h4>Price per Keg : ${keg.price}</h4>
      </React.Fragment>
    );
}

export default KegDetail;
import React from "react";
import './KegDetail.css'

function KegDetail(props){
    const { keg } = props;

    return (
      <div className="keg-detail-window">
        <div className="keg-detail-title">
          <h1>Keg Detail</h1>
          <hr/>
        </div>
        <h3><span className="accent-color">Name :</span> {keg.name}</h3>
        <h3><span className="accent-color">Brand :</span> {keg.brand}</h3>
        <h3><span className="accent-color">Alcohol Content :</span> {keg.alcoholContent}%</h3>
        <h3><span className="accent-color">Price per Pint :</span> ${Math.ceil(keg.price/ 120 * 100) / 100}</h3>
        <h3><span className="accent-color">Price per Keg :</span> ${keg.price}</h3>
      </div>
    );
}

export default KegDetail;
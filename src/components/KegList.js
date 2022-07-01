import React from "react";
import Keg from "./Keg";

const staticKegList = [
    {
        name: 'CherryBeer',
        brand: 'BeerCompany',
        price: '150',
        alcoholContent: '4'
    },
    {
        name: 'BudLight',
        brand: 'Budwiser',
        price: '160',
        alcoholContent: '5'
    },
    {
        name: 'BlueMoon',
        brand: 'BeerCo',
        price: '180',
        alcoholContent: '5'
    }
  ];

function KegList()
{
    return (
        <React.Fragment>
          <hr/>
          {staticKegList.map((keg, index) =>
            <Keg name={keg.name}
              brand={keg.brand}
              price={keg.price}
              alcoholContent = {keg.alcoholContent}
              key={index}/>
          )}
        </React.Fragment>
      );
}

export default KegList;
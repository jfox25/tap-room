import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function AddKeg(props)
{
    function handleNewKegFormSubmission(event) {
        event.preventDefault();
        props.onNewKegCreation({name: event.target.name.value, 
            brand: event.target.brand.value, 
            price: parseInt(event.target.price.value),
            alcoholContent: parseInt(event.target.alcoholContent.value),  
            id: v4()});
      }
    return (
        <React.Fragment>
            <form onSubmit={handleNewKegFormSubmission}>
            <input
                type='text'
                name='name'
                placeholder='Name' />
                <input
                type='text'
                name='brand'
                placeholder='Brand' />
                <input
                type='number'
                name='alcoholContent'
                placeholder='AlcoholContent' />
                <input
                type='number'
                name='price'
                placeholder='Price' />
            <button type='submit'>Add</button>
            </form>
        </React.Fragment>
    )
}
AddKeg.propTypes = {
    onNewKegCreation: PropTypes.func
  };

export default AddKeg;
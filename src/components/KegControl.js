import React from 'react';
import AddKeg from './AddKeg';
import KegList from './KegList';
import KegDetail from './KegDetail';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        formVisable : false,
        mainKegList: [],
        selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
        this.setState({
          formVisable: false,
          selectedKeg: null
        });
      } else {
        this.setState(prevState => ({
          formVisable: !prevState.formVisable,
        }));
      }
  }
  handleAddingNewKegsToList = (newKeg) => {
    newKeg.pints = 120;
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                  formVisable: false });
  }
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }
  handleSellingPint= (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    const dupeArray = this.state.mainKegList;
    var index = dupeArray.indexOf(selectedKeg);
    if (index !== -1) {
        if(dupeArray[index].pints === 0){
            alert("Keg is sold out!")
        }else 
        {
            dupeArray[index].pints--;
        }
    }
    this.setState({mainKegList: dupeArray});
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if(this.state.selectedKeg != null) {
        currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} />
        buttonText = "Return to Keg List";
    }else if (this.state.formVisable) {
        currentlyVisibleState = <AddKeg onNewKegCreation={this.handleAddingNewKegsToList}/>
        buttonText = "Return to Keg List";
    } else {
        currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection = {this.handleChangingSelectedKeg} onPintSale = {this.handleSellingPint} />
        buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default KegControl;
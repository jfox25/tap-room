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
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                  formVisable: false });
  }
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
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
        currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection = {this.handleChangingSelectedKeg} />
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
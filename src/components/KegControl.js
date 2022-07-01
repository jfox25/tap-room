import React from 'react';
import AddKeg from './AddKeg';
import KegList from './KegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        formVisable : false,
        mainKegList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisable: !prevState.formVisable
    }));
  }
  handleAddingNewKegsToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                  formVisable: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.formVisable) {
        currentlyVisibleState = <AddKeg onNewKegCreation={this.handleAddingNewKegsToList}/>
        buttonText = "Return to Keg List";
      } else {
        currentlyVisibleState = <KegList kegList={this.state.mainKegList} />
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
import React from 'react';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import ClassSVGIcon from 'material-ui/svg-icons/action/class';


// Presentational Component: view-only
export const AccountListComponent = (props) => {
  let listOfAccounts = null;

  listOfAccounts=(
    <div>
      <p><b>No</b> accounts!</p>
      <p><i>Talk with your administrator</i></p>
    </div>
  );

  if(props.isLoadingAccounts && props.isLoadingAccounts === true) {
    listOfAccounts=(
      <div>
        <p><i>LOADING ...</i></p>
      </div>
    );
  }
  else {
    if(props.accountList){
      console.log("Here we have " + props.nrOfAccounts + " account(s): ", props.accountList);
      let innerList = props.accountList.map((anAccount, idx) => {
        console.log("Looping... Account #", idx, ": ", anAccount);
        return (
          <ListItem   primaryText={ <span> {anAccount.accountId} [ <b> {anAccount.name} </b> ] </span> }
                      secondaryText={anAccount.description}
                      leftIcon={<ClassSVGIcon />}
                      />
          /*
          <li>
            ID: {anAccount.accountId} - OPEN
          </li>
          */
        );
      });

      listOfAccounts = (
        <div>
          <p>#<b>{props.nrOfAccounts}</b> accounts found!</p>
          <List>
            {innerList}
          </List>
          <p><i>Select one Account to proceed</i></p>
        </div>
      );
    }
  }


  // here's the 'final' JSX
  return (
    <div style={{ margin: '0 auto' }} >
      {' '}
      <RaisedButton primary={true} label="REFRESH" onTouchTap={props.doLoadMyAccounts} />

      <hr/>

      {listOfAccounts}
    </div>
  );
}

// ReactJS type-checking is only active on development
AccountListComponent.propTypes = {
  doLoadMyAccounts : React.PropTypes.func.isRequired,
  accountList      : React.PropTypes.arrayOf(
                        React.PropTypes.shape({
                          accountId   : React.PropTypes.string.isRequired,
                          name        : React.PropTypes.string.isRequired,
                          description : React.PropTypes.string.isRequired
                        }).isRequired
                      ).isRequired,
  nrOfAccounts     : React.PropTypes.number.isRequired,
  isLoadingAccounts: React.PropTypes.bool
}

export default AccountListComponent

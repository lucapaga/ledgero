import React from 'react'

export const AccountListComponent = (props) => {
  let listOfAccounts = null;

  listOfAccounts=(
    <div>
      <p><b>No</b> accounts!</p>
      <p><i>Talk with your administrator</i></p>
    </div>
  );

  if(props.accountList.accountList){
    console.log("Here we have some accounts: ", props.accountList.accountList);
    let innerList = props.accountList.accountList.map((anAccount) => {
      console.log("Looping... Account: ", anAccount);
      return (
        <li>
          ID: {anAccount.accountId} - OPEN
        </li>
      );
    });

    listOfAccounts = (
      <div>
        <ul>
          {innerList}
        </ul>
        <p><i>Select one Account to proceed</i></p>
      </div>
    );
  }

  return (
    <div style={{ margin: '0 auto' }} >
      <h2>My Accounts</h2>
      {' '}
      <button className='btn btn-default' onClick={props.doLoadMyAccounts}>
        Refresh!
      </button>

      <hr/>

      {listOfAccounts}
    </div>
  );
}

// counter     : React.PropTypes.number.isRequired,
/*
accountList     : React.PropTypes.shape({
                    accountList: React.PropTypes.arrayOf(
                      React.PropTypes.shape({
                        accountId   : React.PropTypes.string.isRequired,
                        name        : React.PropTypes.string.isRequired,
                        description : React.PropTypes.string.isRequired
                      }).isRequired
                    ).isRequired
                  }).isRequired
*/
AccountListComponent.propTypes = {
  doLoadMyAccounts : React.PropTypes.func.isRequired,
  accountList     : React.PropTypes.arrayOf(
                        React.PropTypes.shape({
                          accountId   : React.PropTypes.string.isRequired,
                          name        : React.PropTypes.string.isRequired,
                          description : React.PropTypes.string.isRequired
                        }).isRequired
                      ).isRequired
}

export default AccountListComponent

import React from 'react'

export const AccountList = (props) => {
  let listOfAccounts = null;

  if(!props.accountList || props.accountList === null){
    listOfAccounts = (
      <p>You don t have Accounts yet</p>
    );
  } else {
    let innerList = props.accountList.map((anAccount) => {
      <li>
        ID: {anAccount.accountId} - OPEN
      </li>
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
      <button className='btn btn-default' onClick={props.refreshAccountList}>
        Refresh!
      </button>

      {listOfAccounts}
    </div>
  )
}

AccountList.propTypes = {
  accountList     : React.PropTypes.shape({
                      accountId   : React.PropTypes.string,
                      name        : React.PropTypes.string,
                      description : React.PropTypes.string
                    })
}

export default AccountList

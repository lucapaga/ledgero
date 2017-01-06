'use strict'

import React, { PropTypes } from 'react'

const AccountSelectorComponent = ({ onChange }) => {
  return (
    <select name="accountId" onchange={e => {
          e.preventDefault();
          onChange(e.target.value);
        }} >
      <option name="ics">ICS</option>
    </select>
  )
}

Link.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default AccountSelectorComponent

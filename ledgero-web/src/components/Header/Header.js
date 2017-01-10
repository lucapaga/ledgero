import React from 'react'
import { IndexLink, Link, browserHistory } from 'react-router'

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Hamburger from 'material-ui/svg-icons/navigation/menu';


import './Header.scss'

export const navigateToPage = (pageName) => {
  browserHistory.push(pageName);
}

export const Header = () => (
  <div>
    <AppBar title="Ledgero"
            iconElementLeft={
              <IconMenu
                    iconButtonElement={
                      <IconButton><Hamburger /></IconButton>
                    }
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                >

                <MenuItem primaryText="Home"
                          onTouchTap={(evento) => navigateToPage("/") } />

                <MenuItem primaryText="Counter"
                          onTouchTap={(evento) => navigateToPage("/counter") }  />

                <MenuItem primaryText="My Accounts"
                          onTouchTap={(evento) => navigateToPage("/accountList") }  />

              </IconMenu>
            }
    />
  </div>
)

export default Header

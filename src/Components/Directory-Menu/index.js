import React, { Component } from 'react'
import sections from './directory-data';

import './Directory-Menu.scss'
import MenuItem from '../MenuItem';

export default class Directory extends Component {
  state = {
      section: sections
  };

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.section.map(({id, ...otherSectionProps}) => {
            return <MenuItem key={id} {...otherSectionProps}/>
          })
        }
      </div>
    )
  }
}

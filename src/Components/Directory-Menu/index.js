import React, { Component } from 'react'
import sections from './directory-data';
import { MenuItem } from '../MenuItem';

import './Directory-Menu.scss'

export default class Directory extends Component {
  state = {
      section: sections
  };

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.section.map(({title, imageUrl, id, size}) => {
            return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
          })
        }
      </div>
    )
  }
}

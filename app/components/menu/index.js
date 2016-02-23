import React from 'react'
import "./index.scss"
import MenuItem from './menuItem/index.js'

class Menu extends React.Component{

  render(){

    return (
      <div className="menu" onClick={this.props.toggleList}>
        <MenuItem items={this.props.services} />
      </div>
    )
  }

}

export default Menu;
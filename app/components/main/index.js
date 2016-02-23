import React from 'react'
import ReactDOM from 'react-dom'
require('normalize-css')
import "./index.scss"
import "../utils/base.scss"
import Logo from '../logo/index.js'
import Search from '../search/index.js'
import Menu from '../menu/index.js'
import MenuItem from '../menu/menuItem/index.js'
import List from '../list/index.js'

class Main extends React.Component {

  componentDidMount() {
    $(".menuItem").click(function() {
      $(this).addClass("menuItem--isAnimate");
      setTimeout(function() {
        $(".wrapper").addClass("wrapper--listOpened");
      },2200);
    });
  }

  render() {

    return (
      <div className="wrapper">
        <div className="wrapper__inner">
          <Search />
          <Menu  />
          <List />
        </div>
        <Logo />
      </div>  
    )
  }

}

ReactDOM.render(<Main />, app);

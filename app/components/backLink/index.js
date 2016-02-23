import React from 'react'
import "./index.scss"

class BackLink extends React.Component{

  componentDidMount() {
    $(".backLink").click(function() {
      $('.menuItem').each(function() {
        $(this).removeClass("menuItem--isAnimate");
      });
      $(".wrapper").removeClass("wrapper--listOpened");
    });
  }

  render(){
    return (
      <div className="backLink">
      </div>
    )
  }

}

export default BackLink;
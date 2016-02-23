import React from 'react'
import "./index.scss"

class Search extends React.Component{

  render(){
    return (
      <div className="search">
        <input className="search__input" placeholder="Введите название организации" />
        <button className="search__button">Список компаний</button>
      </div>
    )
  }

}

export default Search;
import React from 'react'
import "./index.scss"
import Companies from '../companies/index.js'
import CompanyInfo from '../companyInfo/index.js'
import Search from '../search/index.js'
import BackLink from '../backLink/index.js'

class List extends React.Component{

  render(){
    return (
      <div className="list">
        <BackLink />
        <Search />
        <Companies />
        <CompanyInfo />
      </div>
    )
  }

}

export default List;
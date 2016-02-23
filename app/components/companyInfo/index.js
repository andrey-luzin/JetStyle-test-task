import React from 'react'
import "./index.scss"
import Logo from '../logo/index.js'

class CompanyInfo extends React.Component{

  render(){
    return (
      <div className="companyInfo">
        <div className="companyInfo__choice">
          Выберите компанию из списка или воспользуйтесь строкой поиска
        </div>
        <Logo />
      </div>
    )
  }

}

export default CompanyInfo;
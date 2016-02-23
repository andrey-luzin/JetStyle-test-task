import React from 'react'
import "./index.scss"
import Main from '../../main/index.js'

class MenuItem extends React.Component{

  render(){

    var services = [
        { 
          name: 'Кафе и рестораны', 
          color: '#96bf21',
          mod: 'cafe'
        },
        { 
          name: 'Конференц залы', 
          color: '#4a4a49',
          mod: 'conference'
        },
        { 
          name: 'Магазины', 
          color: '#96bf21',
          mod: 'shop'
        },
        { 
          name: 'Салоны красоты', 
          color: '#3da838',
          mod: 'salon'
        },
        { 
          name: 'Автомойка', 
          color: '#b5cc0d',
          mod: 'auto'
        },
        { 
          name: 'Паркинг', 
          color: '#3da838',
          mod: 'parking'
        },
        { 
          name: 'Управляющая Компания', 
          color: '#b5cc0d',
          mod: 'management '
        },
        { 
          name: 'Отдел продаж', 
          color: '#96bf21',
          mod: 'sales'
        }
    ]

    return (
      <nav>
        {services.map(function(service, i){
            const styles = {
              backgroundColor: `${service.color}`
            }
            return (
              <li key={i} className={"menuItem menuItem--" + `${service.mod}`}>
                <div className="menuItem__image" style={styles}></div>
                <div className="menuItem__text">{service.name}</div>
              </li>
            )
        }.bind(this))}
      </nav>
    )
  }

}

export default MenuItem;
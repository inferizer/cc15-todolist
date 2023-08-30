import "./ListItem.scss"
import { useState } from "react";

/* props = {
    text : string
    icon : <Component/>
    active : boolean
} */

function ListItem(props) {

// active=false

   return(
   <li className={`list__item ${props.active ? "active" : ""} `}>
                {props.icon} {/* use component in props  */}
              <p className="list__item__text">{props.text}</p>
              </li>
   ) 
}

// CSS + JS Value : DynamicsClassName
// not-active : className='list__item__text'
// active : className='list__item__text active'

export default ListItem;
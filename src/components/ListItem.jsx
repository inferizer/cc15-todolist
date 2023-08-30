import "./ListItem.scss"
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

function ListItem(props) {
   return(
   <li className="list__item">
                {props.icon} {/* send  */}
              <p className="list__item__text">{props.text}</p>
              </li>
   ) 
}

export default ListItem;
import "./App.scss";
import "../components/Header.scss";
import Header from "../components/Header";
import Lists from "../components/Lists";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoLists from "../components/Todo/TodoLists";
// Sidebar
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';


function App() {
const generalList =[
  {id:1, text:"Inbox", active:true, icon:<FaInbox/>},
  {id:2, text:"Today", active:false, icon:<FaCalendar/>},
  {id:3, text:"Next 7 Days", active:false, icon:<FaCalendarAlt/>},
];

const projectList =[
  {id:4, text:"Project-A", active:true, icon:<FaInbox/>},
  {id:5, text:"Project-B", active:false, icon:<FaInbox/>},
];

  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        {/*Sidebar */}
        <aside className="sidebar">
          <section className="sidebar__category">
            <Lists data={generalList} />
          </section>
          <section className="sidebar__category">
            <div className="accordion">
              {/* Toggle */}
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active"/>
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>
              {/* List */}
              <Lists data={projectList}/>
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">
        <main className="todo__container">
            <TodoHeader/>
            {/* Create Todo */}
            <TodoCreate/>
            {/* Todolist */}
            <TodoLists/>
        </main>
      </div>
    </div>
  );
}

export default App;

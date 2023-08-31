import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { useState } from "react";

import styles from "./TodoCreate.module.scss";
import TodoForm from "./TodoForm";

/* 
Condition Rendering
- Default : Show btn & txt
- Active : Show TodoForm
 */

// SEC1 - Concept : true ? <AddTask/> : <TodoForm/>

/* SEC2 - Evt Hdl 
    - Binding with UI
    - onClick : wait user click to run FN
        # 1. User click
        # 2. Browser call FN
          Browser send param "EventOBJ" to FN : hdlClick(EventOBJ)
*/

/* 
SEC3 - useState, because JS Value can't Render React
      React State (React Hook)
      const [state,setState] = useState(true) 
      state change : FC have Rerender => new UI

*/

// # FC : Render
function TodoCreate() {
  // HOOK FN
  const [isOpenForm, setIsOpenForm] = useState(false);
  // # JSF : Logic
  const hdlClick = () => {
    setIsOpenForm(!isOpenForm);
    // setState value = opposite of state
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit='Add Task' setIsOpenForm={setIsOpenForm} />
      ) : (
        // send FN setState to TodoForm
        <div className={styles.todo__create} onClick={hdlClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;

import { useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";

import TodoForm from "./TodoForm";
import styles from "./TodoItem.module.scss";

function TodoItem(props) {
  // OBJ Destructuring
  const { task, done, date } = props;
  const [isOpenForm, setIsOpenForm] = useState(false);

  const hdlClick = () => {
    setIsOpenForm(!isOpenForm);
  };
  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit='Edit Task' setIsOpenForm={setIsOpenForm} />
      ) : (
        <ul className={styles.todo__lists}>
          <li className={styles.todo}>
            <div
              className={`${styles.todo__checkbox} ${
                done ? styles.todo__checkbox__done : ""
              }`}
            >
              <HiOutlineCheck className={styles.todo__checkbox__icon} />
            </div>
            <p
              className={`${styles.todo__task} ${
                done ? styles.todo__task__done : ""
              }`}
            >
              {task}
            </p>
            <span className={styles.todo__date}>
              {date}
              {/* {today.toLocaleDateString("en-US", options)} */}
            </span>
            <div className={styles.todo__action}>
              <span onClick={hdlClick}>
                <FaPen className={styles.todo__edit} />
              </span>
              <span>
                <FaTrashAlt className={styles.todo__delete} />
              </span>
            </div>
          </li>
        </ul>
      )}
    </>
  );
}

export default TodoItem;

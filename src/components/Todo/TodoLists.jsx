import { useState } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';

import styles from './TodoLists.module.scss';
import TodoForm from './TodoForm';

function TodoLists() {
  const [isOpenForm,setIsOpenForm] = useState(false)

  const hdlClick = () => {
    setIsOpenForm(!isOpenForm)
  }

  return (
    <>
    {isOpenForm ? (
    <TodoForm/>
    ):(
    <ul className={styles.todo__lists}>
      <li className={styles.todo}>
        <div className={`${styles.todo__checkbox} ${styles.todo__checkbox__done}`}>
          <HiOutlineCheck className={styles.todo__checkbox__icon} />
        </div>
        <p className={`${styles.todo__task} ${styles.todo__task__done}`}>todo-item 1 </p>
        <span className={styles.todo__date}>30 Aug</span>
        <div className={styles.todo__action}>
          <span onClick={hdlClick}>
            <FaPen className={styles.todo__edit}/>
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

export default TodoLists;

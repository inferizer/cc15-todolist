import { useState } from "react";

import { Button } from "../Common/Button/Button";
import styles from "./TodoForm.module.scss";
/*
  props = {
    textSubmit : string
    setIsOpenForm : f()
  }
*/
/*
SEC - 1 Form hdl
  # FN biding with onSubmit
  # default : every btn in form has effect submit (default : type="submit") 
  # Fix problem : define type
    ## type="submit" 
    ## type="button"
*/

function TodoForm(props) {
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  const hdlChangeInput = (evt) => {
    setTaskInput(evt.target.value);
  };

  const hldSubmit = (evt) => {
    evt.preventDefault();
    // FormValidation
    // Case-A : can submit
    // Case-B : can't submit => "Title is required"
  };

  const hdlCancel = () => {
    props.setIsOpenForm(false);
  };

  return (
    <form onClick={hldSubmit} className={styles.todo__form__container}>
      {/*	Body */}
      <input
        className={styles.todo__form__input}
        placeholder='Task Name'
        value={taskInput}
        onChange={hdlChangeInput}
      />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {/* isError */}
        {isError ? (
          <p className={styles.todo__error}>Title is required</p>
        ) : null}

        <div className={styles.todo__form__buttons}>
          <Button
            text='Cancel'
            type='button'
            active={false}
            onClick={hdlCancel}
          />
          <Button text={props.textSubmit} type='submit' active={true} />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;

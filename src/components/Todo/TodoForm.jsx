import { useState } from "react";

import { Button } from "../Common/Button/Button";
import styles from "./TodoForm.module.scss";
/*
  props = {
    textSubmit : string
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
  const [] = useState();
  const hldSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form onClick={hldSubmit} className={styles.todo__form__container}>
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {/* isError */}
        {isError ? (
          <p className={styles.todo__error}>Title is required</p>
        ) : null}

        <div className={styles.todo__form__buttons}>
          <Button text='Cancel' type='button' active={false} />
          <Button text={props.textSubmit} type='submit' active={true} />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;

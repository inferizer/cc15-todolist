import styles from "./TodoHeader.module.scss";

function TodoHeader () {
    const today = new Date();
    const options = {day:"numeric",weekday:"long", month:'short'}
    return (
        <div className={styles.header}>
              <h1 className={styles.header__text}>Inbox</h1>
              <span className={styles.hearder__date}>{today.toLocaleDateString('en-US',options)}</span>
        </div>
    )
}

export default TodoHeader;
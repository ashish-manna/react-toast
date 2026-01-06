import useNotification from "./hooks/useNotification"
import styles from "./App.module.css"

function App() {
  const { NotificationComponent, triggerNotification } = useNotification("top-right");
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <button className={styles.triggerButton}
          onClick={() => {
            triggerNotification({
              type: "success",
              message: "Success Text",
              duration: 4000,
            })
          }}>Trigger Success</button>
        <button className={styles.triggerButton}
          onClick={() => {
            triggerNotification({
              type: "error",
              message: "Error Text",
              duration: 4000,
            })
          }}>Trigger Error</button>
      </div>
      <div className={styles.section}>
        <button className={styles.triggerButton}
          onClick={() => {
            triggerNotification({
              type: "info",
              message: "Info Text",
              duration: 4000,
            })
          }}>Trigger Info</button>
        <button className={styles.triggerButton}
          onClick={() => {
            triggerNotification({
              type: "warning",
              message: "Warning Text",
              duration: 4000,
            })
          }}>Trigger Warning</button>
      </div>
      {NotificationComponent}
    </div>
  )
}

export default App

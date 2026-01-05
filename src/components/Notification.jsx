import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai"
import styles from "./Notification.module.css";

const icons = {
    success: <AiOutlineCheckCircle />,
    info: <AiOutlineInfoCircle />,
    warning: <AiOutlineWarning />,
    error: <AiOutlineCloseCircle />
}

const Notification = ({ type = "info", message, onClose = () => { } }) => {
    return (
        <div className={`${styles.container} ${styles[type]}`}>
            {icons[type]}
            {message}
            <AiOutlineClose className={styles.closeBtn} color="white" onClick={() => onClose()} />
        </div>
    )
}

export default Notification
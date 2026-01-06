import { useCallback, useRef, useState } from "react";
import Notification from "../components/Notification";
import styles from "../components/Notification.module.css"

const useNotification = (position = "top-right") => {
    const [notification, setNotification] = useState(null);
    const timerRef = useRef(null);
    const triggerNotification = useCallback((notificationProps) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        setNotification(notificationProps);
        timerRef.current = setTimeout(() => {
            setNotification(null);

        }, notificationProps.duration);
    }, [])

    const NotificationComponent = notification ? (
        <div className={styles[position]}>
            <Notification {...notification} />
        </div>
    ) : null;
    return { NotificationComponent, triggerNotification };

}

export default useNotification;
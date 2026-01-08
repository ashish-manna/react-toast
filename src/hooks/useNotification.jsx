import { useCallback, useRef, useState } from "react";
import Notification from "../components/Notification";
import styles from "../components/Notification.module.css";

const useNotification = (position = "top-right") => {
    const [notifications, setNotifications] = useState([]);
    const timersRef = useRef({});

    const removeNotification = useCallback((id) => {
        setNotifications((prev) =>
            prev.filter((notification) => notification.id !== id)
        );

        if (timersRef.current[id]) {
            clearTimeout(timersRef.current[id]);
            delete timersRef.current[id];
        }
    }, []);

    const triggerNotification = useCallback((notificationProps) => {
        const id = Date.now() + Math.random();

        setNotifications((prev) => [
            ...prev,
            {
                id,
                ...notificationProps,
            },
        ]);

        timersRef.current[id] = setTimeout(() => {
            removeNotification(id);
        }, notificationProps.duration);
    }, [removeNotification]);

    const NotificationComponent = (
        <div className={`${styles[position]} ${styles.wrapper}`}>
            {notifications.map((notification) => (
                <Notification
                    key={notification.id}
                    {...notification}
                    onClose={() => removeNotification(notification.id)}
                />
            ))}
        </div>
    );

    return { NotificationComponent, triggerNotification };
};

export default useNotification;

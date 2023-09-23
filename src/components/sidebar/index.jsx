import { useEffect, useState } from 'react';
import styles from './styles.module.css'

const SidebarComponent = (props) => {
    const {socket} = props;
    const [activeUsers, setActiveUsers] = useState([]);
 
    useEffect(() => {
        socket.on('responseNewUser', (data) => {
            setActiveUsers(data)
        })
    }, [socket, activeUsers])

    return (
        <div className={styles.sidebar}>
            <h4 className={styles.sidebar__header}>Пользователи</h4>
            <ul className={styles.sidebar__list}>
                {activeUsers.map((elem) => {
                    return (
                        <li key={crypto.randomUUID()}>{elem.name}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default SidebarComponent;
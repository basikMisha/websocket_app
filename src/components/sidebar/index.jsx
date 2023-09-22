import styles from './styles.module.css'

const SidebarComponent = () => {
    return (
        <div className={styles.sidebar}>
            <h4 className={styles.sidebar__header}>Пользователи</h4>
            <ul className={styles.sidebar__list}>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
            </ul>
        </div>
    );
};

export default SidebarComponent;
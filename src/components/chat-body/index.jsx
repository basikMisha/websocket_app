import styles from './styles.module.css';
import {useNavigate} from 'react-router-dom';

const ChatBodyComponent = () => {
    const navigate = useNavigate();


    const handleLeaveChat = () => {
        localStorage.removeItem('name');
        navigate('/')
    }


    return (
        <>
            <header className={styles.header}>
                <button 
                className={styles.btn}
                onClick={handleLeaveChat}
                >
                    Покинуть чат
                </button>
            </header>
            <div className={styles.container}>
                <div className={styles.chats}>
                    <p className={styles.sender__name}>Вы:</p>
                    <div className={styles.message__sender}>
                        <p>ваше сообщение</p>
                    </div>
                </div>
                <div className={styles.chats}>
                    <p>Вы:</p>
                    <div className={styles.message__recipient}>
                        <p>ваше сообщение</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatBodyComponent;
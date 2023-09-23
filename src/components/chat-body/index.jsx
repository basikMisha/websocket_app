import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const ChatBodyComponent = (props) => {
    const navigate = useNavigate();
    // eslint-disable-next-line react/prop-types
    const { messages } = props;

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
                {messages.map(elem => {
                    return elem.name === localStorage.getItem('name') ? (
                        <div className={styles.chats} key={elem.id}>
                            <p className={styles.sender__name}>Вы:</p>
                            <div className={styles.message__sender}>
                                <p>{elem.text}</p>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.chats} key={elem.id}>
                            <p>{elem.name}:</p>
                            <div className={styles.message__recipient}>
                                <p>{elem.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default ChatBodyComponent;
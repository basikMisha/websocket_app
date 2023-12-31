import { useState } from 'react';
import styles from './styles.module.css';

const MessageBlockComponent = (props) => {
    const [message, setMessage] = useState('');
    const {socket} = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(message.trim() && localStorage.getItem('name')) {
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('name'),
                id: `${socket.id} - ${Math.random()}`,
                socketId: socket.id,
            })
        }
        setMessage('');
    }

    const isTyping = () => {
        socket.emit('typing', `${localStorage.getItem('name')} is typing`)
    }

    return (
        <div className={styles.messageBlock}>
            <form
                onSubmit={handleSubmit}
                className={styles.form}>
                <input
                    className={styles.formInput}
                    type='text'
                    placeholder='Введите сообщение:'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={isTyping}
                />
                <button className={styles.btn}>Отправить</button>
            </form>
        </div>
    );
};

export default MessageBlockComponent;
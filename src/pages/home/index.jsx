import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';

const HomePage = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const { socket } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('name', name);
        if(localStorage.getItem('name')) {
            socket.emit('newUser', {name: name, socketId: socket.id });
            navigate('/chat');
        }
    }
    return (
        <>
            
            <form
                onSubmit={handleSubmit}
                className={styles.container}
            >
                <h2>Вход в чат</h2>
                <label>
                    Введите имя:
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.user__input}
                    />
                </label>
                <button type="submit" className={styles.home__btn}>Войти в чат</button>
            </form>
        </>
    )
}

export default HomePage;
import { useEffect, useState } from "react";
import ChatBodyComponent from "../../components/chat-body";
import MessageBlockComponent from "../../components/message-block";
import SidebarComponent from "../../components/sidebar";
import styles from './styles.module.css'

const ChatPage = (props) => {
    const { socket } = props;
    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        socket.on('response', (data) => {
            setMessages([...messages, data])
        });
    }, [socket, messages]);

    useEffect(() => {
        socket.on('responseTyping', (data) => {
            setStatus(data);
        });
        setTimeout(() => {
            setStatus('')
        }, 1000)
    }, [socket])

    return (
        <div className={styles.chat}>
            <SidebarComponent socket={socket} />
            <main className={styles.chat__main}>
                <ChatBodyComponent
                    socket={socket}
                    messages={messages}
                    status={status}
                />
                <MessageBlockComponent socket={socket} />
            </main>
        </div>
    );
};

export default ChatPage;
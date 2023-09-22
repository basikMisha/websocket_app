import ChatBodyComponent from "../../components/chat-body";
import MessageBlockComponent from "../../components/message-block";
import SidebarComponent from "../../components/sidebar";
import styles from './styles.module.css'

const ChatPage = (props) => {
    const { socket } = props;
    return (
        <div className={styles.chat}>
            <SidebarComponent />
            <main className={styles.chat__main}>
                <ChatBodyComponent socket={socket} />
                <MessageBlockComponent socket={socket} />
            </main>
        </div>
    );
};

export default ChatPage;
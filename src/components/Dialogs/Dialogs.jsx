import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
    let dialogsData = [
        {name: "Valeria", id: 1},
        {name: "Lidia", id: 2},
        {name: "Sergey", id: 3},
        {name: "Roman", id: 4},
        {name: "Valera", id: 5}
    ]
    let dialogsElement = dialogsData.map( d => (<DialogItem name={d.name} id={d.id}/>))
    
    let messagesData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Good job!"}
    ]
    let messagesElement = messagesData.map( m => (<Message message={m.message}/>))
    return (
        <div className={style.dialogs}>
            {/* Dialogs */}
            <div className={style.dialogs__items}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>       
    );
};

export default Dialogs;
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogData.map( d => (<DialogItem name={d.name} id={d.id} ava={d.ava} />))
    
    let messagesElement = props.state.messageData.map( m => (<Message message={m.message}/>))
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
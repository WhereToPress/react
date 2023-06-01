import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const DialigItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div>
            <NavLink to={path} className={selectLink => selectLink.isActive ? style.active : style.dialog}>      {props.name} 
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogsData = [
        {name: "Valeria", id: 1},
        {name: "Lidia", id: 2},
        {name: "Sergey", id: 3},
        {name: "Roman", id: 4},
        {name: "Valera", id: 5}
    ]
    let dialogsElement = dialogsData.map( d => (<DialigItem name={d.name} id={d.id}/>))
    
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
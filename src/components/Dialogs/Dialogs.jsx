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
    let messagesData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Good job!"}
    ]
    return (
        <div className={style.dialogs}>
            {/* Dialogs */}
            <div className={style.dialogs__items}>
                <DialigItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialigItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialigItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialigItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialigItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
        
    );
};

export default Dialogs;
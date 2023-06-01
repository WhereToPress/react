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
    return (
        <div className={style.dialogs}>
            {/* Dialogs */}
            <div className={style.dialogs__items}>
                <DialigItem name = "Valeria" id = "1" />
                <DialigItem name = "Lidia" id = "2" />
                <DialigItem name = "Sergey" id = "3" />
                <DialigItem name = "Roman" id = "4" />
                <DialigItem name = "Valera" id = "5" />
            </div>
            <div className={style.messages}>
                <Message message = "Hi!" />
                <Message message = "How are you?" />
                <Message message = "Good!" />
            </div>
        </div>
        
    );
};

export default Dialogs;
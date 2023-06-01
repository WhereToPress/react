import style from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div>
            <NavLink to={path} className={selectLink => selectLink.isActive ? style.active : style.dialog}>
                {props.name} 
            </NavLink>
        </div>
    )
}

export default DialogItem;
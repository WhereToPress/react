import style from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialogItem}>
      <div className={style.dialogItem_ava}>
        <img className={style.dialogItem_ava_img} src={props.ava} alt={`"${props.name}_ava_img`}></img>
      </div>
      <div className={style.dialogItem_name}>
        <NavLink
          to={path}
          className={(selectLink) =>
            selectLink.isActive ? style.active : style.dialog
          }
        >
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;

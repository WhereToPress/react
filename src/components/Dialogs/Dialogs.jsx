import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            {/* Dialogs */}
            <div className={style.dialogs__items}>
                <div>
                    <NavLink to="/dialogs/1" className={selectLink => selectLink.isActive ? style.active : style.dialog}> Valeria </NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/2" className={selectLink => selectLink.isActive ? style.active : style.dialog}>Lida </NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/3" className={selectLink => selectLink.isActive ? style.active : style.dialog}>Sergey </NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How are you</div>
                <div className={style.message}>Good</div>

            </div>
        </div>
        
    );
};

export default Dialogs;
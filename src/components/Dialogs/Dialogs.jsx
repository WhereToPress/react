import style from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            {/* Dialogs */}
            <div className={style.dialogs__items}>
                <div className={style.dialog + ' ' + style.active}>
                    Valeria
                </div>
                <div className={style.dialog}>
                    Lida
                </div>
                <div className={style.dialog}>
                    Sergey
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
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.img}
        src="https://e7.pngegg.com/pngimages/775/182/png-clipart-logo-game-maker-computer-icons-gamemaker-studio-maker-miscellaneous-game.png"
        alt="header_img"
      ></img>
    </header>
  );
};

export default Header;

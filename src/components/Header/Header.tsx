import styles from "./Header.module.css";
import igniteLogo from '../../assets/ignitelogo.svg'

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={igniteLogo} alt="logo do ignite" />
        <strong>Feed Ignite</strong>
      </header>
    </>
  );
};

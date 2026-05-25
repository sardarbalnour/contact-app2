import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://mamasardar.ir">Mama sardar webpage</a> | React course
      </p>
    </div>
  );
}

export default Header;

import styles from "./Loader.module.css";
import ReactLoading from "react-loading";

function Loader() {
  return (
    <div className={styles.App}>
      <ReactLoading
        type="spinningBubbles"
        color="purple"
        height={100}
        width={100}
      />
    </div>
  );
}

export default Loader;

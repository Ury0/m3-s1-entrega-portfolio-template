import styles from "./style.module.css";
import { TechSection } from "../techSection/techSection";

export const BannerSection = () => {
  return (
    <div className={styles.BannerSection}>
      <div className={styles.BannerContent}>
        <p>Hello, my name is Anna</p>
        <h1>
          I <span>love</span> creating and <span>developing</span> projects
        </h1>
        <p>
          Discover here in this environment, created especially for you, all my projects and technologies
        </p>
        <div className={styles.Buttons}>
          <button>See Projects</button>
          <div className={styles.icon}>⬤</div>
        </div>
        <div className={styles.TechLogos}>
          <img src="src/assets/html-logo.png" alt="HTML" />
          <img src="src/assets/css-logo.png" alt="CSS" />
          <img src="src/assets/js-logo.png" alt="JavaScript" />
          <img src="src/assets/node-logo.png" alt="Node.js" />
          <img src="src/assets/react-logo.png" alt="React" />
        </div>
      </div>
      <img src="src/assets/header-bg.png" alt="bannerImage" className={styles.BannerImage} />
    </div>
  );
};

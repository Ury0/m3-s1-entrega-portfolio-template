import styles from "./style.module.css";
 // Ícone do GitHub

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.ProjectCard}>
      <div className={styles.ProjectHeader}>
        <h1>{project.name}</h1>
        <span className={styles.NewTag}>New</span>
      </div>
      <div className={styles.Languages}>
        <label htmlFor="linguagens">Linguagens:</label>
        <p id="linguagens">Javascript</p>
      </div>
      <p>{project.description}</p>
      <div className={styles.ProjectLinks}>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
           Github Code
        </a>
        <button className={styles.AppButton}>
           Aplicação
        </button>
      </div>
    </div>
  );
};

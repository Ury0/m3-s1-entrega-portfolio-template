import { ProjectList } from "./projectsList/projectList"
import { projects } from "../../data/projects"
import styles from './style.module.css'
export const ProjectSection = ()=>{

    return(
        <div className="container">
            <h1>My projects</h1>
            <p>Projects created at <span className={styles.kenzieAcademy}>Kenzie Academy</span></p>
            <ProjectList projects={projects}/>
        </div>
    )
}
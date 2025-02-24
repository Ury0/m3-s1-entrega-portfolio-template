import { ProjectCard } from "./projectCard/projectCard"
import styles from './style.module.css'
export const ProjectList = ({projects})=>{

    return(
        <ul className={styles.techlist}>
            {projects.map(project =>(
                <ProjectCard key={project.id} project={project}/>
            ))}
        </ul>
    )
}
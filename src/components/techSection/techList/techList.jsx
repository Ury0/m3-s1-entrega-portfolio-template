import { TechCard } from "./techCard/techCard"
export const TechList = ({technologias})=>{

    return(
        <ul>
            {technologias.map(tech =>(
                <TechCard key={tech.id} tech={tech}/>
            ))}
        </ul>
    )
}
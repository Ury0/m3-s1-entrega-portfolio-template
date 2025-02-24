
import { TechList } from "./techList/techList";


export const TechSection = ()=>{
     const technologies = [
      { 
        id: 1, 
        name: "HTML", 
        img: "../assets/html-icon.png" 
    },
      { 
        id: 2, 
        name: "CSS", 
        img: "src/assets/css-icon.png" 
    },
      { 
        id: 3, 
        name: "Javascript", 
        img:"src/assets/js-icon.png"},
      { 
        id: 4, 
        name: "React", 
        img: "src/assets/react-icon.png" 
    }
    ];
    return(
        <TechList technologias={technologies}/> 
    )
}
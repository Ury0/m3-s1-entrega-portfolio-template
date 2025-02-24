import styles from './style.module.css';


export const Header = ()=>{

    return(
        <header className={styles.Headers}>
            <h1>Allin</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contatos</a></li>
                <li><a href="#">Midias Digitais</a></li>
            </ul>
        </header>
    )
}
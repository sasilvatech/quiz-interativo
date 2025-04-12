import CardCategoria from '../../components/CardCategoria/CardCategoria';
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Quiz Interativo</h1>
            <p className={styles.subtitulo}>Escolha uma categoria para começar</p>
            <div className={styles.grid}>
                <CardCategoria nome="JavaScript" categoria="javascript" icone={SiJavascript} />
                <CardCategoria nome="HTML" categoria="html" icone={SiHtml5} />
                <CardCategoria nome="CSS" categoria="css" icone={SiCss3} />
            </div>
        </div>
    );
}

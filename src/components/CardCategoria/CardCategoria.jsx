import styles from './CardCategoria.module.css';
import { useNavigate } from 'react-router-dom';

export default function CardCategoria({ icone: Icone, nome, categoria }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/quiz/${categoria}`);
    };

    return (
        <div className={styles.card} data-categoria={categoria} onClick={handleClick}>
            <h2 className={styles.titulo}>
                <Icone size={72} color="white" />
            </h2>
            <div className={styles.overlay}>
                <span className={styles.iniciar}>{nome}</span>
            </div>
        </div>
    );
}

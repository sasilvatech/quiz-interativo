import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../services/firebase';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import styles from './Ranking.module.css';

export default function Ranking() {
    const [ranking, setRanking] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function carregarRanking() {
            const rankingRef = collection(db, 'ranking');
            const q = query(rankingRef, orderBy('pontos', 'desc'), limit(10));
            const snapshot = await getDocs(q);
            const dados = snapshot.docs.map(doc => doc.data());
            setRanking(dados);
        }

        carregarRanking();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>🏆 Ranking</h1>
            <div className={styles.rankingContainer}>
                {ranking.map((item, index) => (
                    <div key={index} className={styles.rankingItem}>
                        <div className={styles.posicao}>#{index + 1}</div>
                        <div className={styles.info}>
                            <span className={styles.nome}>{item.nome}</span>
                            <span className={styles.pontos}>{item.pontos} pontos</span>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                className={styles.botaoVoltar}
                onClick={() => navigate('/')}
            >
                Voltar para Home
            </button>
        </div>
    );
}

// import { useEffect, useState } from 'react';
// import { db } from '../../services/firebase';
// import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

// function Ranking() {
//   const [ranking, setRanking] = useState([]);

//   useEffect(() => {
//     async function carregarRanking() {
//       const rankingRef = collection(db, 'ranking');
//       const q = query(rankingRef, orderBy('pontos', 'desc'), limit(10));
//       const snapshot = await getDocs(q);
//       const dados = snapshot.docs.map(doc => doc.data());
//       setRanking(dados);
//     }

//     carregarRanking();
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Ranking</h2>
//       <ul>
//         {ranking.map((item, index) => (
//           <li key={index}>
//             {item.nome}: {item.pontos} ponto(s)
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Ranking;


import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Ranking.module.css';

export default function Ranking() {
    const [ranking, setRanking] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function carregarRanking() {
            // Aqui você implementará a lógica de carregar o ranking
            const dadosSimulados = [
                { nome: "João", pontos: 10 },
                { nome: "Maria", pontos: 9 },
                { nome: "Pedro", pontos: 8 }
            ];
            setRanking(dadosSimulados);
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
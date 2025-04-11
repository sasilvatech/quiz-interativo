import { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

function Ranking() {
  const [ranking, setRanking] = useState([]);

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
    <div style={{ padding: '20px' }}>
      <h2>Ranking</h2>
      <ul>
        {ranking.map((item, index) => (
          <li key={index}>
            {item.nome}: {item.pontos} ponto(s)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ranking;

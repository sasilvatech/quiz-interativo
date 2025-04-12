import { useState } from 'react';
import { db } from '../../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import styles from './SalvarPontuacao.module.css';

export default function SalvarPontuacao({ pontuacao, totalPerguntas, onSalvar }) {
    const [nome, setNome] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nome.trim()) {
            // Salvar no Firestore
            await addDoc(collection(db, 'ranking'), {
                nome,
                pontos: pontuacao,
                criadoEm: serverTimestamp()
            });

            onSalvar({ nome, pontos: pontuacao });
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                    className={styles.input}
                    required
                />
                <button type="submit" className={styles.botao}>
                    Salvar no Ranking
                </button>
            </form>
        </div>
    );
}

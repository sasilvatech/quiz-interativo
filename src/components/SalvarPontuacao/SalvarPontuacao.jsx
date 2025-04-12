import { useState } from 'react';
import styles from './SalvarPontuacao.module.css';

export default function SalvarPontuacao({ pontuacao, totalPerguntas, onSalvar }) {
    const [nome, setNome] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome.trim()) {
            onSalvar({ nome, pontos: pontuacao });
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Parabéns! 🎉</h2>
            <p className={styles.pontuacao}>
                Você fez <span>{pontuacao}</span> de {totalPerguntas} pontos
            </p>
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
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Quiz.module.css';

import perguntasJS from '../../data/perguntas/perguntasJS';
import perguntasHTML from '../../data/perguntas/perguntasHTML';
import perguntasCSS from '../../data/perguntas/perguntasCSS';

import DesistirPopup from './../../components/DesistirPopup/DesistirPopup'; 

export default function Quiz() {
    const { categoria } = useParams();
    const navigate = useNavigate();
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [pontuacao, setPontuacao] = useState(0);
    const [finalizado, setFinalizado] = useState(false);
    const [mostrarPopup, setMostrarPopup] = useState(false);

    let perguntas = [];

    switch (categoria.toLowerCase()) {
        case 'javascript':
            perguntas = perguntasJS;
            break;
        case 'html':
            perguntas = perguntasHTML;
            break;
        case 'css':
            perguntas = perguntasCSS;
            break;
        default:
            perguntas = [];
    }

    const perguntaAtual = perguntas[indiceAtual];

    const verificarResposta = (respostaSelecionada) => {
        if (respostaSelecionada === perguntaAtual.respostaCorreta) {
            setPontuacao(pontuacao + 1);
        }

        const proximoIndice = indiceAtual + 1;
        if (proximoIndice < perguntas.length) {
            setIndiceAtual(proximoIndice);
        } else {
            setFinalizado(true);
        }
    };

    const confirmarDesistencia = () => {
        navigate('/');
    };

    const cancelarDesistencia = () => {
        setMostrarPopup(false);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Quiz de {categoria.toUpperCase()}</h1>

            {!finalizado ? (
                <div className={styles.quizContainer}>
                    <div className={styles.progresso}>
                        <div
                            className={styles.progressoBar}
                            style={{ width: `${((indiceAtual + 1) / perguntas.length) * 100}%` }}
                        ></div>
                    </div>

                    <h2 className={styles.perguntaNumero}>
                        Pergunta {indiceAtual + 1} de {perguntas.length}
                    </h2>

                    <p className={styles.pergunta}>{perguntaAtual.pergunta}</p>

                    <div className={styles.opcoes}>
                        {perguntaAtual.opcoes.map((opcao, index) => (
                            <button
                                key={index}
                                className={styles.opcao}
                                onClick={() => verificarResposta(opcao)}
                            >
                                {opcao}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={styles.resultado}>
                    <h2>Quiz Finalizado! 🎉</h2>
                    <p className={styles.pontuacao}>
                        Sua pontuação: <span>{pontuacao}</span> de {perguntas.length}
                    </p>
                    <div className={styles.botoes}>
                        <button
                            className={styles.botaoReiniciar}
                            onClick={() => {
                                setIndiceAtual(0);
                                setPontuacao(0);
                                setFinalizado(false);
                            }}
                        >
                            Tentar Novamente
                        </button>
                        <button
                            className={styles.botaoVoltar}
                            onClick={() => navigate('/')}
                        >
                            Voltar para Home
                        </button>
                    </div>
                </div>
            )}

            <div className={styles.botaoDesistirContainer}>
                <button
                    className={styles.botaoDesistir}
                    onClick={() => setMostrarPopup(true)}
                >
                    Desistir
                </button>
            </div>

            {mostrarPopup && (
                <DesistirPopup
                    onConfirmar={confirmarDesistencia}
                    onCancelar={cancelarDesistencia}
                />
            )}
        </div>
    );
}

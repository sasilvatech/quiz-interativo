import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import perguntas from '../data/perguntas';
import QuestionCard from '../components/QuestionCard';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../services/firebase';
import DesistirPopup from '../components/DesistirPopup/DesistirPopup';

function Quiz() {
    const [indice, setIndice] = useState(0);
    const [pontos, setPontos] = useState(0);
    const [finalizado, setFinalizado] = useState(false);
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const navigate = useNavigate();

    const perguntaAtual = perguntas[indice];

    function verificarResposta(resposta) {
        if (resposta === perguntaAtual.resposta) {
            setPontos(pontos + 1);
        }
        const proxima = indice + 1;
        if (proxima < perguntas.length) {
            setIndice(proxima);
        } else {
            setFinalizado(true);
        }
    }

    function handleDesistir() {
        setMostrarPopup(true);
    }

    function confirmarDesistencia() {
        navigate('/');
    }

    function continuarQuiz() {
        setMostrarPopup(false);
    }

    if (finalizado) {
        return (
            <div>
                <h2>Você fez {pontos} ponto(s)!</h2>
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const nome = e.target.nome.value;

                    try {
                        await addDoc(collection(db, 'ranking'), {
                            nome,
                            pontos,
                            data: new Date()
                        });
                        alert('Pontuação salva com sucesso!');
                    } catch (err) {
                        console.error("Erro ao salvar:", err);
                        alert('Erro ao salvar pontuação. Tente novamente.');
                    }
                }}>
                    <input name="nome" placeholder="Seu nome" required />
                    <button type="submit">Salvar pontuação</button>
                </form>

                <button onClick={() => navigate('/')}>Voltar para a Home</button>
            </div>
        );
    }

    return (
        <div>
            <QuestionCard
                pergunta={perguntaAtual.pergunta}
                opcoes={perguntaAtual.opcoes}
                onResponder={verificarResposta}
            />

            <button onClick={handleDesistir} className="btn-desistir">Desistir</button>

            {mostrarPopup && (
                <DesistirPopup
                    onConfirmar={confirmarDesistencia}
                    onCancelar={continuarQuiz}
                />
            )}
        </div>
    );
}

export default Quiz;

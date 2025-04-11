import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Quiz Interativo</h1>
      <button onClick={() => navigate('/quiz')}>Começar Quiz</button>
      <br /><br />
      <button onClick={() => navigate('/ranking')}>Ver Ranking</button>
    </div>
  );
}

export default Home;

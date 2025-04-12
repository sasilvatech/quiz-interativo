function QuestionCard({ pergunta, opcoes, onResponder }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px auto', width: '300px' }}>
        <h3>{pergunta}</h3>
        {opcoes.map((opcao, i) => (
          <button key={i} onClick={() => onResponder(opcao)} style={{ display: 'block', margin: '10px auto' }}>
            {opcao}
          </button>
        ))}
      </div>
    );
  }
  
  export default QuestionCard;
  
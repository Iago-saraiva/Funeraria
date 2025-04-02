import React, { useState, useEffect } from 'react';

const Coffins = ({ navigateTo, selectCoffin }) => {
  const [coffins, setCoffins] = useState([]);
  const [selectedCoffin, setSelectedCoffin] = useState(null);
  const [loading, setLoading] = useState(true); // Para indicar que os dados estão sendo carregados
  const [error, setError] = useState(null); // Para armazenar erros, caso ocorram

  // Fetch coffins data using GET method on component mount
  useEffect(() => {
    const getCoffinsData = async () => {
      try {
        // Usando o método GET para buscar os dados da API
        const response = await fetch('http://localhost:8000/api/coffins/', {
          method: 'GET', // Definindo o método GET explicitamente
          headers: {
            'Content-Type': 'application/json', // Especificando o tipo de conteúdo esperado
            // Adicione o token de autenticação aqui, caso necessário:
            // 'Authorization': `Bearer ${yourToken}`,
          },
        });

        // Verifica se a resposta é OK (status 200-299)
        if (!response.ok) {
          throw new Error('Falha na requisição');
        }

        // Transformando a resposta em JSON
        const data = await response.json();
        console.log(data)
        
        // Atualiza o estado com os dados obtidos
        setCoffins(data);
      } catch (err) {
        setError(err.message); // Armazena a mensagem de erro
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    getCoffinsData(); // Chama a função para buscar os dados
  }, []); // O array vazio garante que o efeito seja executado uma única vez quando o componente montar

  const handleSelect = (coffin) => {
    setSelectedCoffin(coffin);
    selectCoffin(coffin); // Chama a função selectCoffin passada como prop
  };

  const handleProceed = () => {
    if (selectedCoffin) {
      navigateTo('payment'); // Navega para a página de pagamento
    } else {
      alert('Por favor, selecione um caixão antes de prosseguir.');
    }
  };

  // Exibição condicional durante o carregamento ou erro
  if (loading) return <p>Carregando caixões...</p>;
  if (error) return <p>Erro ao carregar caixões: {error}</p>;

  return (
    <div className="coffins">
      <div className="container">
        <h2>Selecione um Caixão</h2>
        <p>Escolha o caixão que melhor atende às suas necessidades.</p>

        <div className="coffins-grid">
          {coffins.map(coffin => (
            <div 
              key={coffin.id} 
              className={`coffin-card ${selectedCoffin?.id === coffin.id ? 'selected' : ''}`}
              onClick={() => handleSelect(coffin)}
            >
              <img src={coffin.image} alt={coffin.model} />
              <h3>{coffin.model}</h3>
              <p><strong>Material:</strong> {coffin.material}</p>
              <p><strong>Tamanho:</strong> {coffin.size} cm</p>
              <p><strong>Preço:</strong> R$ {coffin.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="selected-coffin">
          {selectedCoffin && (
            <>
              <h3>Caixão Selecionado:</h3>
              <p><strong>Modelo:</strong> {selectedCoffin.model}</p>
              <p><strong>Preço:</strong> R$ {selectedCoffin.price.toFixed(2)}</p>
            </>
          )}
        </div>

        <button 
          style={{ backgroundColor: 'green' }}
          onClick={handleProceed} 
          className="btn"
          disabled={!selectedCoffin}
        >
          Prosseguir para Pagamento
        </button>
      </div>
    </div>
  );
};

export default Coffins;

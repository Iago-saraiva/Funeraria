import React, { useState } from 'react';

const fetchCoffinsData = async () => {
  
  return [
    {
      id: 1,
      name: 'Caixão Standard',
      material: 'Madeira Pinus',
      size: '200cm',
      price: 1200.00,
      image: 'https://via.placeholder.com/300x200?text=Caixão+Standard'
    },
    {
      id: 2,
      name: 'Caixão Premium',
      material: 'Madeira Carvalho',
      size: '210cm',
      price: 2500.00,
      image: 'https://via.placeholder.com/300x200?text=Caixão+Premium'
    },
    {
      id: 3,
      name: 'Caixão Luxo',
      material: 'Mogno',
      size: '220cm',
      price: 3800.00,
      image: 'https://via.placeholder.com/300x200?text=Caixão+Luxo'
    },
    {
      id: 4,
      name: 'Caixão Econômico',
      material: 'Compensado',
      size: '190cm',
      price: 800.00,
      image: 'https://via.placeholder.com/300x200?text=Caixão+Econômico'
    },
  ];
};

const Coffins = ({ navigateTo, selectCoffin }) => {
  const [selectedCoffin, setSelectedCoffin] = useState(null);

  const handleSelect = (coffin) => {
    setSelectedCoffin(coffin);
    selectCoffin(coffin);
  };

  const handleProceed = () => {
    if (selectedCoffin) {
      navigateTo('payment');
    } else {
      alert('Por favor, selecione um caixão antes de prosseguir.');
    }
  };

  return (
    <div className="coffins">
      <div className="container">
        <h2>Selecione um Caixão</h2>
        <p>Escolha o caixão que melhor atende às suas necessidades.</p>

        <div className="coffins-grid">
          {fetchCoffinsData.map(coffin => (
            <div 
              key={coffin.id} 
              className={`coffin-card ${selectedCoffin?.id === coffin.id ? 'selected' : ''}`}
              onClick={() => handleSelect(coffin)}
            >
              <img src={coffin.image} alt={coffin.name} />
              <h3>{coffin.name}</h3>
              <p><strong>Material:</strong> {coffin.material}</p>
              <p><strong>Tamanho:</strong> {coffin.size}</p>
              <p><strong>Preço:</strong> R$ {coffin.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="selected-coffin">
          {selectedCoffin && (
            <>
              <h3>Caixão Selecionado:</h3>
              <p><strong>Modelo:</strong> {selectedCoffin.name}</p>
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
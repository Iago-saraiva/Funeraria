import React, { useState } from 'react';

const Register = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    death_description: '',
    body_weight: 0.0,
    coffin_estimated_size: 0.0,
    finished_order: false,
    coffin: null 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON)
    try {
      const response = await fetch('http://localhost:8000/api/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        navigateTo('coffins');
      } else {
        console.error('Erro ao enviar os dados:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
    }
  };

  return (
    <div className="register">
      <div className="container">
        <h2>Cadastro do Cliente</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome do Cliente:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="city">Cidade:</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="death_description">Descrição do Óbito:</label>
            <textarea id="death_description" name="death_description" value={formData.death_description} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="body_weigth">Peso da Pessoa (kg):</label>
            <input type="number" id="body_weigth" name="body_weigth" value={formData.body_weigth} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="coffin_estimated_size">Tamanho Estimado do Caixão (cm):</label>
            <input type="number" id="coffin_estimated_size" name="coffin_estimated_size" value={formData.coffin_estimated_size} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn">Próximo - Selecionar Caixão</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

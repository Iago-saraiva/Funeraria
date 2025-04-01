import React, { useState } from 'react';

const Register = ({ navigateTo, saveFormData }) => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    obituary: '',
    weight: '',
    coffinSize: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveFormData(formData);
    navigateTo('coffins');
  };

  return (
    <div className="register">
      <div className="container">
        <h2>Cadastro do Cliente</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome do Cliente:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">Cidade:</label>
            <input 
              type="text" 
              id="city" 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefone:</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="obituary">Descrição do Óbito:</label>
            <textarea 
              id="obituary" 
              name="obituary" 
              value={formData.obituary} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="weight">Peso da Pessoa (kg):</label>
            <input 
              type="number" 
              id="weight" 
              name="weight" 
              value={formData.weight} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="coffinSize">Tamanho Estimado do Caixão (cm):</label>
            <input 
              type="number" 
              id="coffinSize" 
              name="coffinSize" 
              value={formData.coffinSize} 
              onChange={handleChange} 
              required 
            />
          </div>

          <button type="submit" className="btn">Próximo - Selecionar Caixão</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
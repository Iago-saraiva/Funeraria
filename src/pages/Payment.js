import React, { useState } from 'react';

const Payment = ({ navigateTo, coffin }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [installments, setInstallments] = useState(1);

  if (!coffin) {
    return (
      <div className="payment">
        <div className="container">
          <h2>Nenhum caixão selecionado</h2>
          <button onClick={() => navigateTo('coffins')} className="btn">
            Voltar para Seleção de Caixões
          </button>
        </div>
      </div>
    );
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert('Pagamento processado com sucesso!');
    navigateTo('home');
  };

  return (
    <div className="payment">
      <div className="container">
        <h2>Finalizar Pagamento</h2>

        <div className="order-summary">
          <h3>Resumo do Pedido</h3>
          <p><strong>Caixão:</strong> {coffin.name}</p>
          <p><strong>Material:</strong> {coffin.material}</p>
          <p><strong>Tamanho:</strong> {coffin.size}</p>
          <p><strong>Valor do Caixão:</strong> R$ {coffin.price.toFixed(2)}</p>
          <p><strong>Taxas de Serviço:</strong> R$ 350.00</p>
          <p className="total"><strong>Total:</strong> R$ {(coffin.price + 350).toFixed(2)}</p>
        </div>

        <form onSubmit={handlePaymentSubmit} className="payment-form">
          <div className="form-group">
            <h3>Método de Pagamento</h3>
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="credit" 
                checked={paymentMethod === 'credit'} 
                onChange={() => setPaymentMethod('credit')} 
                required
              />
              Cartão de Crédito
            </label>
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="debit" 
                checked={paymentMethod === 'debit'} 
                onChange={() => setPaymentMethod('debit')} 
              />
              Cartão de Débito
            </label>
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="pix" 
                checked={paymentMethod === 'pix'} 
                onChange={() => setPaymentMethod('pix')} 
              />
              PIX
            </label>
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="boleto" 
                checked={paymentMethod === 'boleto'} 
                onChange={() => setPaymentMethod('boleto')} 
              />
              Boleto Bancário
            </label>
          </div>

          {paymentMethod === 'credit' && (
            <div className="form-group">
              <label htmlFor="installments">Parcelas:</label>
              <select 
                id="installments" 
                value={installments} 
                onChange={(e) => setInstallments(parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                  <option key={num} value={num}>{num}x de R$ {((coffin.price + 350) / num).toFixed(2)}</option>
                ))}
              </select>
            </div>
          )}

          <div className="form-group">
            <button style={{ backgroundColor:'green' }} type="submit" className="btn-confirmar">Confirmar Pagamento</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
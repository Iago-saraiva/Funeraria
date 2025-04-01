import React from 'react';

const Home = ({ navigateTo }) => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h2>Serviços Funerários com Dignidade e Respeito</h2>
          <p>Há mais de 30 anos prestando serviços funerários com compaixão e profissionalismo.</p>
          <button onClick={() => navigateTo('register')} className="btn">
            Iniciar Atendimento
          </button>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>Sobre Nós</h2>
          <p>A Funerária Menos Um oferece serviços completos para cuidar do seu ente querido com todo o respeito e cuidado que merece. Nossa equipe está disponível 24 horas para fornecer suporte e orientação durante esse momento difícil.</p>
          <p>Oferecemos planos funerários, assistência em documentação, traslado e todos os serviços necessários para um funeral digno.</p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Nossos Serviços</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Atendimento 24h</h3>
              <p>Disponíveis a qualquer momento para prestar assistência.</p>
            </div>
            <div className="service-card">
              <h3>Documentação</h3>
              <p>Auxílio completo com toda a documentação necessária.</p>
            </div>
            <div className="service-card">
              <h3>Variedade de Caixões</h3>
              <p>Ampla seleção de caixões de diferentes materiais e preços.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
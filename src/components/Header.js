import React from 'react';

const Header = ({ currentPage, navigateTo }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>Funerária Menos Um</h1>
        <nav>
          <ul>
            <li>
              <button 
                onClick={() => navigateTo('home')}
                className={currentPage === 'home' ? 'active' : ''}
              >
                Início
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('register')}
                className={currentPage === 'register' ? 'active' : ''}
              >
                Cadastro
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('coffins')}
                className={currentPage === 'coffins' ? 'active' : ''}
                disabled={!currentPage === 'coffins' && !currentPage === 'payment'}
              >
                Caixões
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
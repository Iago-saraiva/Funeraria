import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Coffins from './pages/Coffins';
import Payment from './pages/Payment';
import './styles/main.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState(null);
  const [selectedCoffin, setSelectedCoffin] = useState(null);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home navigateTo={setCurrentPage} />;
      case 'register':
        return <Register 
          navigateTo={setCurrentPage} 
          saveFormData={(data) => setFormData(data)}
        />;
      case 'coffins':
        return <Coffins 
          navigateTo={setCurrentPage} 
          selectCoffin={(coffin) => setSelectedCoffin(coffin)}
        />;
      case 'payment':
        return <Payment 
          navigateTo={setCurrentPage} 
          coffin={selectedCoffin}
        />;
      default:
        return <Home navigateTo={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} navigateTo={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
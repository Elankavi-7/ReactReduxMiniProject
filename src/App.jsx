import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Register from './pages/Register';
import LoginPopup from './pages/LoginPopup';
import DebugAuth from './Components/DebugAuth';
import { closeModal } from './redux/uiSlice';
import './App.css';

const AppContent = () => {
  const { modal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
      
      {/* Modal */}
      {modal.isOpen && modal.type === 'login' && <LoginPopup />}
      
      {/* Debug Panel - Remove in production */}
      <DebugAuth />
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;
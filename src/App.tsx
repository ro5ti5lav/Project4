import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ActiveSprintPage from './pages/ActiveSprintPage';
import AdminPage from './pages/AdminPage';
import Header from './components/Header';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/active-sprint" element={<ActiveSprintPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

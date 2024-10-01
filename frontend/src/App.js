import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CalendarPage from './pages/CalendarPage';
import SettingsPage from './pages/SettingsPage';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const accessToken = useSelector((state) => state.user.accessToken);
  const isAuthenticated = !!accessToken;

  return (
    <div>
      <Header authenticated={isAuthenticated} />
      <Container fluid>
        <Routes>
          <Route
            path="/register"
            element={<PublicRoute restricted={isAuthenticated}><RegisterPage /></PublicRoute>}
          />
          <Route
            path="/login"
            element={<PublicRoute restricted={isAuthenticated}><LoginPage /></PublicRoute>}
          />
          <Route
            path="/account"
            element={<PrivateRoute><SettingsPage /></PrivateRoute>}
          />
          <Route
            path="/"
            element={<PrivateRoute><CalendarPage /></PrivateRoute>}
          />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};

export default App;

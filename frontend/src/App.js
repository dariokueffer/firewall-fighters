import React from 'react';
import { Switch } from 'react-router-dom';
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
        <Switch>
          <PublicRoute restricted={isAuthenticated} component={RegisterPage} path="/register" exact />
          <PublicRoute restricted={isAuthenticated} component={LoginPage} path="/login" exact />
          <PrivateRoute component={SettingsPage} path="/account" exact />
          <PrivateRoute component={CalendarPage} path="/" exact />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;

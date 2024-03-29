import React from 'react';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/authContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (    
      <Container 
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: "100vh" }}
      >
        <div className='w-100' style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route path='/signup' Component={Signup} />
                <Route path='/login' Component={Login} />
                <Route path='/forgot-password' Component={ForgotPassword} />
                <Route path='/update-profile' Component={UpdateProfile} />
                <Route path="update-profile"
                  element={
                    <PrivateRoute>
                      <UpdateProfile />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  );
}

export default App;

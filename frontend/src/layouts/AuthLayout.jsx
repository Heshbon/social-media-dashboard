import React from 'react';
import dashboard from '../assets/images/dashboard.png';

const AuthLayout = () => {
  return (
    <div className='auth-layout'>
      <div className='auth-container'>
        <header className='auth-header'>
          <img src={dashboard} alt="Dashboard Logo" className='auth-logo' />
          <h2 className='auth-title'>Welcome to My Social Media Dashboard</h2>
        </header>
        
        <main className='auth-content'>

        </main>
        
        <footer className='auth-footer'>
          <p>&copy; 2024 Social Media Dashboard. All rights reserved.</p>
          <p>
            <a href="/terms" target='_blank' rel="noopener noreferrer">Terms of Service</a> |{' '}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default AuthLayout;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Auth.module.css';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token
      localStorage.setItem('token', data.token);
      
      // Redirect based on onboarding status
      navigate(data.isOnboarded ? '/dashboard' : '/onboarding');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1 className={styles.authTitle}>Welcome Back</h1>
        <p className={styles.authSubtitle}>Log in to your AllBots.io account</p>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className={styles.input}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className={styles.authLinks}>
          <Link to="/signup" className={styles.authLink}>
            Don't have an account? Sign up
          </Link>
          <Link to="/forgot-password" className={styles.authLink}>
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}

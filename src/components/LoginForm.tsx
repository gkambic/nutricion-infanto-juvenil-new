// components/LoginForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    router.push('/');
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        router.push('/');
      }
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // ← Added for redirect
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { login } from '../store/slices/authSlice';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ← Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })); // Fake login
    navigate('/'); // Redirect to dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4 text-center font-semibold">Login</h2>
        
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <Button type="submit" className="w-full mt-4">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;

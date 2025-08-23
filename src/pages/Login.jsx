import { useState } from 'react';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // true = login, false = signup

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in...');
    } else {
      console.log('Signing up...');
    }
  };

  return (
    <div className='flex items-center justify-center '>
      <div className='w-96 border border-[#77846a]/20 shadow-lg rounded-2xl p-8'>
        <h2 className='text-2xl font-bold mb-6 text-center text-[#2a4125]'>
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          {!isLogin && (
            <input
              type='text'
              placeholder='Full Name'
              className='border p-2 rounded-lg outline-none focus:ring-0'
              required
            />
          )}

          <input
            type='email'
            placeholder='Email'
            className='border p-2 rounded-lg outline-none focus:ring-0'
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='border p-2 rounded-lg outline-none focus:ring-0'
            required
          />

          <button
            type='submit'
            className='bg-[#2a4125] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer'
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className='mt-4 text-center text-gray-600'>
          {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
          <span
            className='text-green-700 cursor-pointer font-medium hover:underline'
            onClick={toggleForm}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
}

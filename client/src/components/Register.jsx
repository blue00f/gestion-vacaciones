import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [ user, setUser] = useState('');
  const [ password, setPassword] = useState('');
  const [ email, setEmail] = useState('');

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:1234/register', {
        Usuario: User,
        Email: Email,
        Contraseña: Password,
      });

      if (response.status === 200) {
        setMessage('Usuario registrado.');
      } else {
        setMessage('Error al registrar al usuario.');
      }
    } catch (error) {
      setMessage('Error en la solicitud: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gray-800 rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
        <img
          className="rounded-full h-32 w-32"
          src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="user avatar"
        />
        <form method="post" className="mt-8 mb-4">
          <div className="mb-4">
            <label for="userEmail" className="sr-only">
              Nombre de usuario
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="text"
              id="userEmail"
              placeholder="Nombre de usuario"
              required
            />
          </div>
          <div className="mb-4">
            <label for="userEmail" className="sr-only">
              Email
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="email"
              id="userEmail"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-5">
            <label for="userEmail" className="sr-only  ">
              Contraseña
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="password"
              id="userPass"
              placeholder="Contraseña"
              required
            />
          </div>
          <div className="mb-5">
            <label for="userEmail" className="sr-only  ">
              Confirmar Contraseña
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="password"
              id="userPass"
              placeholder="Confirmar Contraseña"
              required
            />
          </div>
           
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3"
            type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </>
  )
}

export default Register

import { useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import axios from 'axios'
function Login({ isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, usernameProp, setUsernameProp}) {
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const [message, setMessage] = useState("")


  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setMessage("Enviando solicitud...");
  
    try {
      const requestData = {
        username: Username,
        password: Password
      };
  
      const response = await axios.post("http://localhost:1234/admins/login", requestData);
  
      if (response.status === 200) {
        const data = response.data;
  
        if (data.success) {
         
          Swal.fire({
            icon: "success",
            title: "Inicio de Sesión Exitoso",
            text: data.message,
          });
  
          setIsLoggedIn(true);
          setMessage(data.message);
          setUsername(data.username);
          setUsernameProp(data.username);
          
          {data.rol ? (
            setIsAdmin(true)
          )
          : 
          setIsAdmin(false)}
           
        } else {
          
          Swal.fire({
            icon: "error",
            title: "Inicio de Sesión Fallido",
            text: data.message,
          });
  
          setIsLoggedIn(false);
          setMessage(data.message);
        }
      } else {
       
        Swal.fire({
          icon: "error",
          title: "Error de Solicitud",
          text: "Hubo un problema al enviar la solicitud al servidor.",
        });
      }
    
    } catch (error) {
      setMessage("Error en la solicitud: " + error.message);
      console.error("Error al enviar la solicitud:", error);
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
        <form method="post" className="mt-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label for="userName" className="sr-only">
              Nombre de usuario
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="text"
              id="userName"
              placeholder="Nombre de usuario"
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div>
            <label for="userPassword" className="sr-only">
              Contraseña
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="password"
              id="userPass"
              placeholder="Contraseña"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mt-3 flex items-center text-white ">
            <input className="h-4 w-4 mr-2 " type="checkbox" id="userRemember" />
            <label for="userRemember">Recuerdame</label>
          </div>
          <button
            className="w-full text-center mb-2 bg-green-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover-bg-indigo-500 transition ease-in-out duration-300"
            type="submit" onChange={handleSubmit}>
            Iniciar sesión
          </button>
          <p className="text-white"> ¿No tienes una cuenta?</p>
          <Link className="text-green-600 " to="/register">
          <p
            className=" w-full text-center mb-2 bg-purple-800 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover-bg-indigo-500 transition ease-in-out duration-300 "
            >
            Registrarse
          </p>
          </Link>
        </form>
        <div className="text-white">
         
        {message && <p>{message}</p>}
      </div>
      </div>
    </>
  )
}

export default Login

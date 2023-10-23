import React, { useState } from "react"
import axios from "axios"

function Register() {
  const [user, setUser] = useState("")
  const [userName, setUserName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const handleUserChange = (e) => {
    setUser(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    setMessage("")

    try {
      const response = await axios.post("http://localhost:1234/admins", {
        nombre: userName,
        apellido: lastName,
        correo: email,
        usuario: user,
        clave: password,
      })

      if (response.status === 200) {
        setMessage("Usuario registrado.")
      } else {
        setMessage("Error al registrar al usuario.")
      }
    } catch (error) {
      setMessage("Error en la solicitud: " + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="bg-gray-800 rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
        <img
          className="rounded-full h-32 w-32"
          src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="user avatar"
        />
        <form className="mt-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label for="userName" className="sr-only">
              Nombre Completo
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="text"
              id="userEmail"
              onChange={handleUserNameChange}
              placeholder="Nombre Completo"
              required
            />
          </div>
          <div className="mb-4">
            <label for="userLastName" className="sr-only">
              Apellido
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="text"
              id="userEmail"
              onChange={handleLastNameChange}
              placeholder="Apellido"
              required
            />
          </div>
          <div className="mb-4">
            <label for="userUser" className="sr-only">
              Nombre de Usuario
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="text"
              id="userEmail"
              onChange={handleUserChange}
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
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
              placeholder="Contraseña"
              required
            />
          </div>
          <button
            className="w-full bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover-bg-indigo-500 transition ease-in-out duration-300"
            type="submit"
            disabled={isLoading}>
            Registrarse
          </button>
        </form>
        <div className="text-white">
          {isLoading && <p>Cargando...</p>}
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  )
}

export default Register

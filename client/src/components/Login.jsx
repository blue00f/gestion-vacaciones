import { useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

function Login({ isLoggedIn, setIsLoggedIn }) {
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setMessage("Enviando solicitud...")

    try {
      const response = await fetch(`${URL_POSTS}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username,
          Password,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Inicio de Sesión Exitoso",
          text: data.message,
        })
        setIsLoggedIn(true)
        setMessage(data.message)
        setUsername(data.username)
      } else {
        Swal.fire({
          icon: "error",
          title: "Inicio de Sesión Fallido",
          text: data.message,
        })
        setIsLoggedIn(false)
        setMessage(data.message)
      }
      setMessage(data.message) // Actualiza el estado del mensaje con la respuesta del servidor
    } catch (error) {
      setMessage("Error en la solicitud: " + error.message)
      console.error("Error al enviar la solicitud:", error)
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
        <form method="post" className="mt-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label for="userEmail" className="sr-only">
              Nombre de usuario
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="email"
              id="userEmail"
              placeholder="Nombre de usuario"
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div>
            <label for="userEmail" className="sr-only">
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
          <div className="my-4 flex items-center text-white ">
            <input className="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
            <label for="userRemember">Recuerdame</label>
          </div>
          <Link className="text-white " to="/register">
            <p>¿No tienes una cuenta?</p>
          </Link>
          <button
            className="w-full bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover-bg-indigo-500 transition ease-in-out duration-300"
            type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </>
  )
}

export default Login

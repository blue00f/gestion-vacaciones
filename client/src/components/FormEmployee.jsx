import React, { useState } from "react"
import axios from "axios"

function FormEmployee() {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [document, setDocument] = useState("")
  const [address, setAddress] = useState("")
  const [admissionDate, setAdmissionDate] = useState("")
  const [department, setDepartment] = useState("")
  const [position, setPosition] = useState("")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value)
  }

  const handleDocumentChange = (e) => {
    setDocument(e.target.value)
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const handleAdmissionDateChange = (e) => {
    setAdmissionDate(e.target.value)
  }

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value)
  }

  const handlePositionChange = (e) => {
    setPosition(e.target.value)
  }

  const handleUserChange = (e) => {
    setUser(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    setIsLoading(true)
    setMessage("")

    try {
      const requestData = {
        nombre: name,
        apellido: lastName,
        fechaNacimiento: birthDate,
        documento: document,
        correo: email,
        direccion: address,
        fechaIngreso: admissionDate,
        departamento: department,
        puesto: position,
        usuario: user,
        clave: password,
      }

      const response = await axios({
        method: "post",
        url: "http://localhost:1234/employees",
        data: requestData,
      })

      if (response.status === 201) {
        setMessage("Empleado enviado correctamente")
      } else {
        setMessage("Error al enviar los datos")
      }
    } catch (error) {
      setMessage("Error en la solicitud: " + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-96 mx-auto mt-10">
      <div className="p-6 mr-2 bg-gray-800 sm:rounded-lg">
        <h2 className="text-4xl text-white font-extrabold tracking-tight">
          Ingresar empleado
        </h2>
      </div>

      <form
        className="p-6 flex flex-col justify-center"
        onSubmit={handleSubmit}>
        <div className="mt-4">
          <label htmlFor="name" className="text-white">
            Nombre
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Juan"
            onChange={handleNameChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="lastName" className="text-white">
            Apellido
          </label>
          <input
            required
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            placeholder="Pérez"
            onChange={handleLastNameChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="birthDate" className="text-white">
            Fecha de nacimiento
          </label>
          <input
            required
            type="date"
            name="birthDate"
            id="birthDate"
            value={birthDate}
            onChange={handleBirthDateChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="document" className="text-white">
            Documento
          </label>
          <input
            required
            type="text"
            name="document"
            id="document"
            value={document}
            placeholder="12345678"
            onChange={handleDocumentChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="juanperez@gmail.com"
            onChange={handleEmailChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="address" className="text-white">
            Dirección
          </label>
          <input
            required
            type="text"
            name="address"
            id="address"
            value={address}
            placeholder="Av. Falsa 123"
            onChange={handleAddressChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="admissionDate" className="text-white">
            Fecha de Ingreso
          </label>
          <input
            required
            type="date"
            name="admissionDate"
            id="admissionDate"
            value={admissionDate}
            onChange={handleAdmissionDateChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="department" className="text-white">
            Departamento
          </label>
          <input
            required
            type="text"
            name="department"
            id="department"
            value={department}
            placeholder="Servicio técnico"
            onChange={handleDepartmentChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="position" className="text-white">
            Puesto
          </label>
          <input
            required
            type="text"
            name="position"
            id="position"
            value={position}
            placeholder="Administrador de redes"
            onChange={handlePositionChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="user" className="text-white">
            Usuario
          </label>
          <input
            required
            type="text"
            name="user"
            id="user"
            value={user}
            placeholder="Juan123"
            onChange={handleUserChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="text-white">
            Contraseña
          </label>
          <input
            required
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="********"
            onChange={handlePasswordChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover-bg-indigo-500 transition ease-in-out duration-300">
          Enviar
        </button>
      </form>
      <div className="text-white">
        {isLoading && <p>Cargando...</p>}
        {message && <p>{message}</p>}
      </div>
    </div>
  )
}

export default FormEmployee

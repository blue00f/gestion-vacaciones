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
    <div className="flex items-center justify-center">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-800 sm:rounded-lg">
              <h1 className="text-4xl text-gray-400 dark:text-white font-extrabold tracking-tight">
                Enter Employee
              </h1>
              <p className="text-normal text-lg sm:text-2xl font-medium text-gray-400 mt-2">
                Fill out the form to start communication
              </p>

              <div className="flex items-center mt-4 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-800">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +1 11 5543-5432-42
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <form
              className="p-6 flex flex-col justify-center"
              onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  placeholder="Nombre"
                  onChange={handleNameChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastName" className="hidden">
                  Apellido
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  placeholder="Apellido"
                  onChange={handleLastNameChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="birthDate" className="hidden">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  name="birthDate"
                  id="birthDate"
                  value={birthDate}
                  placeholder="Fecha de Nacimiento"
                  onChange={handleBirthDateChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="document" className="hidden">
                  Email
                </label>
                <input
                  type="text"
                  name="document"
                  id="document"
                  value={document}
                  placeholder="Documento"
                  onChange={handleDocumentChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleEmailChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="address" className="hidden">
                  Direccion
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  placeholder="Dirección"
                  onChange={handleAddressChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="admissionDate" className="hidden">
                  Fecha de Ingreso
                </label>
                <input
                  type="date"
                  name="admissionDate"
                  id="admissionDate"
                  value={admissionDate}
                  placeholder="Fecha de Ingreso"
                  onChange={handleAdmissionDateChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="department" className="hidden">
                  Departamento
                </label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  value={department}
                  placeholder="Departamento"
                  onChange={handleDepartmentChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="position" className="hidden">
                  Puesto
                </label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  value={position}
                  placeholder="Puesto"
                  onChange={handlePositionChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="user" className="hidden">
                  Usuario
                </label>
                <input
                  type="text"
                  name="user"
                  id="user"
                  value={user}
                  placeholder="Usuario"
                  onChange={handleUserChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="password" className="hidden">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="********"
                  onChange={handlePasswordChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover-bg-indigo-500 transition ease-in-out duration-300">
                Enviar
              </button>
            </form>
          </div>
          <div className="text-white">
            {isLoading && <p>Cargando...</p>}
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormEmployee

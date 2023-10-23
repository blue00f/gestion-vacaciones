import React, { useState } from "react"
import axios from "axios"

function Calendar() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [legajoId, setLegajoId] = useState("")
  const [adminId, setAdminId] = useState("")
  const [comentarios, setComentarios] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value)
  }

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value)
  }

  const handleLegajoIdChange = (e) => {
    setLegajoId(e.target.value)
  }

  const handleAdminIdChange = (e) => {
    setAdminId(e.target.value)
  }

  const handleComentariosChange = (e) => {
    setComentarios(e.target.value)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    setMessage("")

    try {
      const requestData = {
        fechaInicio: startDate,
        fechaFin: endDate,
        comentarios: comentarios,
        legajo_id: parseInt(legajoId),
        administrador_id: parseInt(adminId),
      }

      const response = await axios({
        method: "post",
        url: "http://localhost:1234/vacations",
        data: requestData,
      })

      if (response.status === 201) {
        setMessage("Fechas y datos adicionales enviados con éxito")
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
      <div date-rangepicker className="flex items-center">
        <span className="mr-4 text-white">De</span>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none"></div>
          <input
            name="start"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 text-center dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date start"
          />
        </div>
        <span className="mx-4 text-white">Hasta</span>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none"></div>
          <input
            name="end"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 text-center dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date end"
          />
        </div>
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={legajoId}
          onChange={handleLegajoIdChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Legajo ID"
        />
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={adminId}
          onChange={handleAdminIdChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Administrador ID"
        />
      </div>
      <div className="mt-4">
        <textarea
          value={comentarios}
          onChange={handleComentariosChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Comentarios"
        />
      </div>
      <div className="flex justify-center items-center py-4">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-gray-500 hover-bg-gray-400 text-white font-bold py-2 px-4 rounded">
          Enviar
        </button>
      </div>
      <div className="text-white">
        {isLoading && <p>Cargando...</p>}
        {message && <p>{message}</p>}
      </div>
    </div>
  )
}

export default Calendar

import { useState } from "react"

function useHandleSubmit(value) {
  const handleSubmit = (event) => {
    event.preventDefault()
    // Logica
    console.log("Formulario enviado")
  }

  return handleSubmit
}

export default useHandleSubmit

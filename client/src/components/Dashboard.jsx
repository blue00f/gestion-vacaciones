import { useState, useEffect } from 'react';

import './Dashboard.css';
import axios from 'axios';

function Dashboard() {
  const [vacaciones, setVacaciones] = useState([]);
  const [editMode, setEditMode] = useState(false);
const [newState, setNewState] = useState(vacacion.estado);


  useEffect(() => {
    axios.get('http://localhost:1234/vacations')
      .then((response) => {
        setVacaciones(response.data);  
      })
      .catch((error) => {
        console.error('Error al obtener las vacaciones: ', error);
      });
  }, []);

  const handleModificarEstado = (vacacion) => {
    const nuevoEstado = prompt('Ingrese el nuevo estado (Aceptado, Pendiente o Rechazado):');
    if (nuevoEstado === 'Aceptado' || nuevoEstado === 'Pendiente' || nuevoEstado === 'Rechazado') {
      // Actualizar el estado de la vacación con el nuevo valor.
      vacacion.estado = nuevoEstado;
    } else {
      alert('Estado no válido. Debe ser Aceptado, Pendiente o Rechazado.');
    }
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div>
        <div>
          <h2 className="text-3xl text-center text-white font-semibold pb-10">Vacaciones</h2>
        </div>

        <table className="w-full text-gray-400 border-separate space-y-6 text-2xl rounded-lg">
          <thead className="bg-gray-800 text-gray-500">
            <tr>
              <th className="p-3">Empleado</th>
              <th className="p-3">Dias tomados</th>
              <th className="p-3">Fecha inicio</th>
              <th className="p-3">Fecha final</th>
              <th className="p-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            {vacaciones.map((vacacion, index) => (
              <tr key={index} className="bg-gray-800">
                <td className="p-3">
                  <div className="text-white font-semibold">{vacacion.nombre} {vacacion.apellido}</div>
                </td>
                <td className="p-3">{vacacion.diasTomados}</td>
                <td className="p-3">{new Date(vacacion.fechaInicio).toLocaleDateString()}</td>
                <td className="p-3">{new Date(vacacion.fechaFin).toLocaleDateString()}</td>
                <td className="p-3">
                  <span
                    className={`${vacacion.estado === 'Aceptado' ? 'bg-green-400' :
                      vacacion.estado === 'Pendiente' ? 'bg-yellow-400' :
                        vacacion.estado === 'Rechazado' ? 'bg-red-400' :
                          'bg-yellow-400'
                      } text-white rounded-md px-2`}
                  >
                    {vacacion.estado}
                  </span>
                  <button onClick={() => handleModificarEstado(vacacion)}>Modificar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default Dashboard;
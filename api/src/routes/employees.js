import { Router } from 'express'
import { EmployeeController } from '../controllers/employees.js'

export const createEmployeeRouter = ({ vacationModel }) => {
  const employeeRouter = Router()

  const employeeController = new EmployeeController({ vacationModel })

  employeeRouter.post('/', employeeController.create)
  employeeRouter.delete('/:id', employeeController.delete)
  employeeRouter.patch('/:id', employeeController.update)

  return employeeRouter
}

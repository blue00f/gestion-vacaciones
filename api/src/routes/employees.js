import { Router } from 'express'
import { EmployeeController } from '../controllers/employees.js'

export const createEmployeeRouter = ({ vacationModel }) => {
  const employeesRouter = Router()

  const employeeController = new EmployeeController({ vacationModel })

  employeesRouter.post('/', employeeController.create)
  employeesRouter.delete('/:id', employeeController.delete)
  employeesRouter.patch('/:id', employeeController.update)

  return employeesRouter
}
